import calculate from '../logic/calculate';

describe('calculate', () => {
  test('check AC button', () => {
    const state = { total: 0, operation: null, next: null };
    const buttonName = 'AC';
    expect(calculate(state, buttonName)).toEqual({ total: 0, operation: null, next: null });
  });
  test('check +/- button', () => {
    const state = { total: '9', operation: null, next: null };
    const buttonName = '+/-';
    expect(calculate(state, buttonName)).toEqual({ total: '-9', operation: null, next: null });
  });
  test('if total and operation are null', () => {
    const state = {
      total: null,
      next: '0',
      operation: null,
    };
    const buttonName = '0';
    const response = calculate(state, buttonName);
    expect(response).toEqual({});
  });
});
