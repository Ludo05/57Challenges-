const { checkEmployeeExistenceAndRemove } = require('./removeEmployee');


describe('test remove function', function () {
    it('should remove name from list', async () => {
        const list = ['John Smith', 'Big Dinger', 'Toby Joe', 'Lewis Karl']
        return expect(checkEmployeeExistenceAndRemove('John Smith',list)).resolves.toEqual('Item has been deleted')
    });

    it('should remove name from list', async  ()  =>{
        const list = ['John Smith','Big Dinger','Toby Joe','Lewis Karl']
        return expect(checkEmployeeExistenceAndRemove('Johnmith',list)).rejects.toEqual('Johnmith Name does\'nt exist');

    });
});
