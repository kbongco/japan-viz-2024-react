import React from 'react';
import { useCurrency } from '../Context/CurrencyContext';

const CurrencyToggle = () => {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <div className="flex items-center">
      <span className="mr-2 text-3xl font-medium text-white">USD</span>
      <button
        onClick={toggleCurrency}
        className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors ${
          currency === 'JPY' ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
            currency === 'JPY' ? 'translate-x-6' : 'translate-x-1'
          }`}
        ></span>
      </button>
      <span className="ml-2 text-3xl font-medium text-white">JPY</span>
    </div>
  );
};

export default CurrencyToggle;
