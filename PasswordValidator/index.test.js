const { passwordValidator }= require('./index')

describe('Tests password validator', () => {
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('')).toBe('Please enter a password');

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('12345')).toBe('The password \'12345\' is a very weak password');

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('abcdef')).toBe("The password 'abcdef' is a weak password");

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('abc123xyz')).toBe( "The Password abc123xyz is a strong password");

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('1337!hxor@')).toBe("The password 1337!hxor@ is a very strong password");

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('@')).toBe('can\'t be validated');

    });
});
