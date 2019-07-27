const { passwordValidator }= require('./index')

describe('Tests password validator', () => {
    xit('should give the correct outputs for tests', () => {
        expect(passwordValidator('')).toBe('Please enter a password');

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('12345')).toBe('is a very weak password');

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('abcdef')).toBe('is a weak password');

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('abc123xyz')).toBe('is a strong password');

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('1337!hxor@')).toBe('is a very strong password');

    });
});
