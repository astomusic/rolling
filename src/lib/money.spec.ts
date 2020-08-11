import { numberToMoney } from './Money';

describe('Number To Money', () => {
  test('num === 0 (Decimal or not)', () => {
    expect(numberToMoney(0)).toBe('0.00');
    expect(numberToMoney(0, false)).toBe('0');
  });
  test('numbers (Decimal or not)', () => {
    expect(numberToMoney(123)).toBe('1.23');
    expect(numberToMoney(178, false)).toBe('1');
  });
});
