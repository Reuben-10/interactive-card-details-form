import React, { useState } from "react";
import CardDisplay from "./CardDisplay";
import CreditCardFormInputs from "./CreditCardFormInputs";
import SuccessMessage from "./SuccessMessage";
import type { CreditCardFormData } from "./types";

const CreditCardForm: React.FC = () => {
  const [formData, setFormData] = useState<CreditCardFormData>({
    cardholderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatCardNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  const handleInputChange = (field: keyof CreditCardFormData, value: string) => {
    let newValue = value;

    if (field === "cardNumber") {
      newValue = formatCardNumber(value);
      const isValid = newValue.replace(/\s/g, "").length === 16;
      setErrors((prev) => ({ ...prev, cardNumber: isValid ? "" : "Wrong format, numbers only" }));
    }

    if (["expiryMonth", "expiryYear", "cvc"].includes(field)) {
      newValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({ ...prev, [field]: newValue }));

    if (newValue.trim() !== "") {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.cardholderName.trim()) newErrors.cardholderName = "Can't be blank";
    if (!formData.cardNumber.trim()) newErrors.cardNumber = "Can't be blank";
    else if (formData.cardNumber.replace(/\s/g, "").length !== 16)
      newErrors.cardNumber = "Wrong format, numbers only";
    if (!formData.expiryMonth.trim()) newErrors.expiryMonth = "Can't be blank";
    if (!formData.expiryYear.trim()) newErrors.expiryYear = "Can't be blank";
    if (!formData.cvc.trim()) newErrors.cvc = "Can't be blank";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) setIsSubmitted(true);
  };

  const handleContinue = () => {
    setFormData({
      cardholderName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12 px-4 py-8">
      {/* Card Display */}
      <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
        <CardDisplay data={formData} />
      </div>

      {/* Form or Success */}
      <div className="w-full max-w-md lg:w-[30%]">
        {isSubmitted ? (
          <SuccessMessage onContinue={handleContinue} />
        ) : (
          <>
            <CreditCardFormInputs
              data={formData}
              errors={errors}
              onChange={handleInputChange}
            />
            <button
              onClick={handleSubmit}
              className="w-full mt-6 py-3 bg-purple-950 text-white font-medium rounded-md transition-colors"
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreditCardForm;
