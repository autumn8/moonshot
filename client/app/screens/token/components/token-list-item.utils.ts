import { Token } from '@/app/services/tokens.types';

export const isSvg = (file: Token) => file.icon.toLowerCase().endsWith('.svg');

export const getTokenDisplayCode = (code: string) =>
  code.split('_')[0].toUpperCase();

export const getCapitalizedNetworkCode = (networkCode: string) =>
  networkCode
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const priceFormatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  minimumFractionDigits: 2,
});
