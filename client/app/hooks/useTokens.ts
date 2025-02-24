import { useEffect, useState } from 'react';
import { fetchCurrencies } from '../services/currencies.service';
import {
  Currency,
  CurrencyType,
  MoonError,
} from '../services/currencies.types';

export const useCurrencies = (type: CurrencyType) => {
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [error, setError] = useState<MoonError | null>(null);

  useEffect(() => {
    const getCurrencies = async () => {
      const response = await fetchCurrencies();
      if (!response.success) {
        setError(response.error);
        return;
      }
      setCurrencies(response.data.filter((currency) => currency.type === type));
      setLoading(false);
    };
    getCurrencies();
  });

  return {
    loading,
    error,
    currencies,
  };
};
