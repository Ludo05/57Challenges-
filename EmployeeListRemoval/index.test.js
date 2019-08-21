const { checkEmployeeExistenceAndRemove, askForEmployeeToBeRemoved, getEmployeesFile} = require('./removeEmployee');


describe('test remove function', function () {
    let list;
    beforeEach(() => {
         list = ['John Smith', 'Big Dinger', 'Toby Joe','Bogley']

    });

    it('should remove name from list', async () => {
         return expect(checkEmployeeExistenceAndRemove('John Smith',list)).resolves.toEqual('Item has been deleted')
    });

    it('should remove name from list', async  ()  =>{
        return  expect(checkEmployeeExistenceAndRemove('Johnmith',list)).rejects.toEqual('Johnmith Name does\'nt exist');

    });

    // it('should remove name from list', async  ()  =>{
    //     return expect(askForEmployeeToBeRemoved(list)).resolves.toEqual({});
    //
    // });

    it('should return the list of employees',async () => {
        return  expect(getEmployeesFile('./Emp.txt'))
            .resolves.toEqual(['Mike Billing', 'Bart Simpson', 'Morty Sanchez','Lewis Williams'])
    });

    it('should return the a error',async () => {
        return  expect(getEmployeesFile('./Non-Existent-File.txt')).rejects.toEqual('File not found')
    });
});
