const { passwordValidator }= require('./index')

describe('Tests password validator', () => {
    xit('should give the correct outputs for tests', () => {
        expect(passwordValidator('')).toBe('Please enter a password');

    });
    xit('should give the correct outputs for tests', () => {
        expect(passwordValidator('12345')).toBe('is a very weak password');

    });
    xit('should give the correct outputs for tests', () => {
        expect(passwordValidator('abcdef')).toBe('is a weak password');

    });
    xit('should give the correct outputs for tests', () => {
        expect(passwordValidator('abc123xyz')).toBe('is a strong password');

    });
    it('should give the correct outputs for tests', () => {
        expect(passwordValidator('1337hxor@')).toBe('is a very strong password');

    });
});
//     xdescribe('Tests password validator negative tests', () => {
//     it('should give the correct outputs for tests', () => {
//         expect(passwordValidator('weak')).toBe('Weakk password');
//
//     });
//      it('should give the correct outputs for tests', () => {
//         expect(passwordValidator('')).toBe('Weak password');
//
//     });
//      xit('should give the correct outputs for tests', () => {
//         expect(passwordValidator('weak')).toBe('Weak password');
//
//     });
//      xit('should give the correct outputs for tests', () => {
//         expect(passwordValidator('weak')).toBe('Weak password');
//
//     });
//
//
// });
//
