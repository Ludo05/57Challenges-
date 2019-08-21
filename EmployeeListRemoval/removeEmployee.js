const fs = require('fs');
const rl = require('../Util/consoleReadLine');

module.exports.getEmployeesFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file,'utf8', (err,data) => {
            let employeeList = [];
            if(err){
                reject('File not found')
            } else {
                console.log(data.split('\n'));
                data.split('\n').filter(i => i !== '')
                    .forEach( em => employeeList.push(em));
                resolve(employeeList)
            }
        })
    })
};

module.exports.askForEmployeeToBeRemoved = (users) => {
    return new Promise( resolve => {
        rl.question(`Enter the employee you want to remove? `, emp => {
            resolve({users,emp})
        })
    });
};

//Write something then returns to the console log Take the return and do something with it
const checkEmployeeExistenceAndRemove = (emp,list) => {
    return new Promise( (resolve, reject) => {
        if (list.indexOf(emp) === -1) {
            reject(`${emp} Name does'nt exist`);
            return -1;
        } else {
            const idx = list.indexOf(emp);
            const newEmployeeList = list.filter( e => e !== list[idx]).join('\n');
            fs.writeFile('./Emp.txt', newEmployeeList, (err) => {
                if(err){
                    reject(err);
                    return -1
                } else {
                    resolve('Item has been deleted');
                    return 1
                }
            });
        }
    })
};

module.exports.checkEmployeeExistenceAndRemove = checkEmployeeExistenceAndRemove;
