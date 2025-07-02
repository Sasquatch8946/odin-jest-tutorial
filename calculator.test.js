import calculator from './calculator';

describe('Calculator module', () => {
    it('Adds', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    it('Subtracts', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });

    it('Multiplies', () => {
        expect(calculator.multiply(10, 12)).toBe(120);
    });

    it('Divides', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });
});