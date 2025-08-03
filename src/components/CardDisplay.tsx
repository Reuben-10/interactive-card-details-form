import React from "react";
import type { CreditCardFormData } from "./types";

interface CardDisplayProps {
    data: CreditCardFormData;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ data }) => {
    const cardNumber = data.cardNumber || "0000 0000 0000 0000";
    const name = data.cardholderName || "JANE APPLESEED";
    const expiry = `${data.expiryMonth.padStart(2, "0") || "00"}/${data.expiryYear.padStart(2, "0") || "00"}`;
    const cvc = data.cvc || "000";

    return (
        <div className="relative w-full max-w-sm mx-auto min-h-[300px] lg:min-h-0 xs:mb-4 md:mb-10 flex">
            {/* Front of Card */}
            <div
                className="md:w-[340px] w-full h-[190px] bg-cover bg-no-repeat rounded-xl text-white p-6 absolute top-35 lg:top-40 lg:left-10 right-2 z-10 flex flex-col justify-end"
                style={{
                    backgroundImage: "url('/assets/images/bg-card-front.png')",
                }}
            >
                <div className="mb-8">
                    <img src="/assets/images/card-logo.svg" alt="card-logo" />
                </div>
                <div className="text-lg tracking-widest font-light mb-6">
                    {cardNumber}
                </div>
                <div className="flex justify-between items-center text-xs uppercase font-semibold">
                    <span>{name}</span>
                    <span>{expiry}</span>
                </div>
            </div>

            {/* Back of Card */}
            <div
                className="md:w-[340px] w-full h-[190px] bg-cover bg-no-repeat rounded-xl absolute top-4 lg:top-95 lg:left-20 left-2 md:left-20 z-0 flex items-center justify-end pr-10 text-sm tracking-widest text-white"
                style={{
                    backgroundImage: "url('/assets/images/bg-card-back.png')",
                }}
            >
                {cvc}
            </div>
        </div>
    );
};

export default CardDisplay;
