import calculate from '../logic/calculate';

describe('calculate', () => {
  test('check AC button', () => {
    const state = { total: 0, operation: null, next: null };
    const buttonName = 'AC';
    expect(calculate(state, buttonName)).toEqual({ total: 0, operation: null, next: null });
  });
});
