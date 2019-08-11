const { remEmp } = require('./removeEmployee');


describe('test remove function', function () {
    let list;
    beforeEach(() => {
      list = ['John Smith','Big Dinger','Toby Joe','Lewis Karl']
    });

    it('should remove name from list', function () {
        expect(remEmp('John Smith',list)).toEqual(1)

    });

    it('should remove name from list', function () {
        expect(remEmp('Joey',list)).toEqual(-1)
    });
});
