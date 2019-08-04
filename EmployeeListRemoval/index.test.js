const { removeEmployee } = require('./index');


describe('test remove function', function () {
    let list;
    beforeEach(() => {
      list = ['John Smith','Big Dinger','Toby Joe','Lewis Karl']
    });

    it('should remove name from list', function () {
        expect(removeEmployee('John Smith',list)).toEqual(1)

    });

    it('should remove name from list', function () {
        expect(removeEmployee('Joey',list)).toEqual(-1)
    });
});
