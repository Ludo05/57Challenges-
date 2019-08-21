const {getEmployeesFile, askForEmployeeToBeRemoved, checkEmployeeExistenceAndRemove} = require('./removeEmployee')

getEmployeesFile('./Emp.txt')
    .then( users  => users)
    .then( users => askForEmployeeToBeRemoved(users))
    .then((obj) => checkEmployeeExistenceAndRemove(obj.emp,obj.users))
    .then( response => console.log(response))
    .catch(err => console.log(err))

// const DelEmployee = async (fileLocation) => {
//     const Delete = await DeleteEmployee(fileLocation);
//     console.log(Delete.join('\n'));
//     return  await askQuestion(Delete);
// };
//
// DelEmployee('./Emp.txt').finally(() => console.log('Done'));
