import currency from 'currency.js';

export function formatPrice(value) {
  return currency(value, {
    symbol: 'R$ ',
    separator: '.',
    decimal: ',',
  }).format();
}
