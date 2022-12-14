import operate from '../logic/operate';

describe('Check Calculator Operations', () => {
  describe('Check Addition', () => {
    const add = operate(5, 5, '+');
    test('5 + 5 = 10', () => {
      expect(add).toBe('10');
    });
  });

  describe('Check Subtraction', () => {
    const subtract = operate(10, 5, '-');
    test('10 - 5 = 5', () => {
      expect(subtract).toBe('5');
    });
  });

  describe('Check Multiplication', () => {
    const multiply = operate(5, 5, 'x');
    test('5 x 5 = 25', () => {
      expect(multiply).toBe('25');
    });
  });

  describe('Check Division', () => {
    const divide = operate(25, 5, '÷');
    test('25 ÷ 5 = 5', () => {
      expect(divide).toBe('5');
    });
  });
});
