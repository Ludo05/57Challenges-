const {getEmployeesFile, askForEmployeeToBeRemoved, checkEmployeeExistenceAndRemove} = require('./removeEmployee')

// getEmployeesFile('./Emp.txt')
//     .then( users => askForEmployeeToBeRemoved(users))
//     .then((obj) => checkEmployeeExistenceAndRemove(obj.emp,obj.users))
//     .then( response => console.log(response))
//     .catch(err => console.log(err))

const DelEmployee = async (fileLocation) => {
    try {
        const employees = await getEmployeesFile(fileLocation);
        const askForUser = await askForEmployeeToBeRemoved(employees);
        const responseObj = await checkEmployeeExistenceAndRemove(askForUser.emp, askForUser.users);
        console.log(responseObj);
    } catch (e) {
        console.log(e)

    }
};

DelEmployee('./Emp.txt');
