import React from "react";

interface DonationProgressProps {
  currentAmount?: number;
}

const DonationProgress: React.FC<DonationProgressProps> = ({
  currentAmount = 15000,
}) => {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
    })
      .format(amount)
      .replace("DZD", "DA");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-pink-100">
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Collecte de fonds
        </h3>
        <div className="text-3xl font-bold text-pink-600">
          {formatAmount(currentAmount)}
        </div>
        <div className="text-sm text-gray-600">Montant collecté à ce jour</div>
      </div>

      <div className="text-center text-sm text-gray-600">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          <span>Mis à jour quotidiennement</span>
        </div>
      </div>
    </div>
  );
};

export default DonationProgress;
