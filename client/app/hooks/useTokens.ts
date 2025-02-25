import { useEffect, useState } from 'react';
import { fetchTokens } from '../services/tokens.service';
import { MoonError, Token } from '../services/tokens.types';

export const useTokens = () => {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [error, setError] = useState<MoonError | null>(null);

  useEffect(() => {
    const getTokens = async () => {
      const response = await fetchTokens();
      if (!response.success) {
        setError(response.error);
        return;
      }
      setTokens(response.data);
      setLoading(false);
    };
    getTokens();
  }, []);

  return {
    loading,
    error,
    tokens,
  };
};
