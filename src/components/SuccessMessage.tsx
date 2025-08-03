interface Props {
  onContinue: () => void;
}

const SuccessMessage: React.FC<Props> = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <img src="/assets/images/icon-complete.svg"/>
      </div>
      <h2 className="text-2xl font-bold uppercase tracking-wider mb-2 text-purple-950">
        Thank You!
      </h2>
      <p className="text-gray-400 mb-6">We've added your card details</p>
      <button
        onClick={onContinue}
        className="mt-2 px-8 py-3 bg-purple-950 text-white rounded-md hover:bg-[#684cd9] transition-colors w-full max-w-xs"
      >
        Continue
      </button>
    </div>
  );
};

export default SuccessMessage;
