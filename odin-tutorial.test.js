import OT from './odin-tutorial';

describe('String module', () => {
    test('Capitalizes a word', () => {
        expect(OT.capitalize('sean')).toBe('Sean');
    });

    test('Reverses a string', () => {
        expect(OT.reverse('blue')).toBe('eulb');
    });

});

describe('Caesar cipher module', () => {
    test('Wraps correctly from z to a', () => {
        expect(OT.caesarCipher('xyz', 3)).toBe('abc');
    });

    test('Preserves case', () => {
        expect(OT.caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('Preserves special characters', () => {
        expect(OT.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});

describe('analyzeArray method', () => {
    test('Returns the expected object', () => {
        expect(OT.analyzeArray([1, 8, 2, 3, 4, 6])).toEqual(
            {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        );
    });
});

