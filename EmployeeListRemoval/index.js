const {askQuestion} = require("./removeEmployee");
const {DeleteEmployee} = require('./removeEmployee')

DeleteEmployee('./Emp.txt')
    .then(data => {
        const filter = data.filter( i => i !== '');
        return filter;
    }).then( users => {
        users.forEach(emp => console.log(emp))
        return users;
        }).then( userToDelete => askQuestion(userToDelete))
    .catch(err => console.log(err));



