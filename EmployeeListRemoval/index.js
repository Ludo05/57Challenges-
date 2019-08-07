const {DeleteEmployee, askQuestion} = require('./removeEmployee')

// DeleteEmployee('./Emp.txt')
//     .then(data => {
//         const filter = data.filter( i => i !== '');
//         return filter;
//     }).then( users => {
//         users.forEach(emp => console.log(emp))
//         return users;
//         }).then( userToDelete => askQuestion(userToDelete))
//     .catch(err => console.log(err));



const DelEmployee = async (fileLocation) => {
    const Delete = await DeleteEmployee(fileLocation);
    console.log(Delete.join('\n'))
    return  await askQuestion(Delete);
};

DelEmployee('./Emp.txt').finally(() => console.log('Done'));
