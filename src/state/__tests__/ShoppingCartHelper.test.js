import { getTotalPrice } from '../ShoppingCartHelper';

describe('ShoppingCartHelper', () => {
  describe('getTotalPrice', () => {
    test('returns zero for empty args', () => {
      expect(getTotalPrice([], {})).toEqual('0.00');
    });

    test('counts price correctly', () => {
      expect(getTotalPrice(getItems(), getAmounts())).toEqual('103.50');
    });
  });
});

function getItems() {
  return [
    { id: '5', price: '50' },
    { id: '8', price: '3.5' },
  ];
}
function getAmounts() {
  return { 5: 2, 8: 1 };
}
