const { checkEmployeeExistenceAndRemove } = require('./removeEmployee');


describe('test remove function', function () {

    it('should remove name from list', async () => {
        const list = ['John Smith', 'Big Dinger', 'Toby Joe', 'Lewis Karl']
        expect(checkEmployeeExistenceAndRemove('John Smith', list)).toEqual(1)
    });

    it('should remove name from list', async  ()  =>{
        const list = ['John Smith','Big Dinger','Toby Joe','Lewis Karl']
        expect(checkEmployeeExistenceAndRemove('Joey',list)).toEqual(-1)
    });
});
