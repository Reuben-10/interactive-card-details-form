import type { CreditCardFormData } from "./types";

interface Props {
  data: CreditCardFormData;
  errors: Partial<Record<keyof CreditCardFormData, string>>;
  onChange: (field: keyof CreditCardFormData, value: string) => void;
}

const InputField = ({
  label,
  placeholder,
  name,
  value,
  error,
  onChange,
  type = "text",
  maxLength,
}: {
  label: string;
  placeholder: string;
  name: keyof CreditCardFormData;
  value: string;
  error?: string;
  onChange: (name: keyof CreditCardFormData, value: string) => void;
  type?: string;
  maxLength?: number;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-purple-950 tracking-widest mb-1 uppercase">
      {label}
    </label>
    <input
      type={type}
      maxLength={maxLength}
      className={`w-full px-4 py-2 border rounded-md text-base tracking-wide placeholder-gray-400 focus:outline-none focus:ring-1 ${
        error
          ? "border-error focus:ring-error"
          : "border-gray-400 focus:ring-primary-gradient-start focus:ring-offset-primary-gradient-end"
      }`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const CreditCardFormInputs: React.FC<Props> = ({ data, errors, onChange }) => {
  return (
    <>
      <InputField
        label="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        name="cardholderName"
        value={data.cardholderName}
        error={errors.cardholderName}
        onChange={onChange}
      />
      <InputField
        label="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        name="cardNumber"
        value={data.cardNumber}
        error={errors.cardNumber}
        onChange={onChange}
        maxLength={19}
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <InputField
            label="Exp. Date (MM)"
            placeholder="MM"
            name="expiryMonth"
            value={data.expiryMonth}
            error={errors.expiryMonth}
            onChange={onChange}
            maxLength={2}
          />
        </div>
        <div className="flex-1">
          <InputField
            label="Exp. Date (YY)"
            placeholder="YY"
            name="expiryYear"
            value={data.expiryYear}
            error={errors.expiryYear}
            onChange={onChange}
            maxLength={2}
          />
        </div>
        <div className="flex-1">
          <InputField
            label="CVC"
            placeholder="e.g. 123"
            name="cvc"
            value={data.cvc}
            error={errors.cvc}
            onChange={onChange}
            maxLength={3}
          />
        </div>
      </div>
    </>
  );
};

export default CreditCardFormInputs;
