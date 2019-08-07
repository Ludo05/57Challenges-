const fs = require('fs');
const rl = require('../Util/consoleReadLine');

// ./Emp.txt
module.exports.DeleteEmployee = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file,'utf8', (err,data) => {
            let employeeList = [];
            if(err){
                reject(err)
            } else {
                data.split('\n').forEach( em => employeeList.push(em))
                resolve(employeeList)
            }
        })
    })
};

module.exports.askQuestion = (users) => {
    return new Promise( resolve => {
        rl.question(`Enter the employee you want to remove? `, emp  => {
            resolve(removeEmp(emp,users)
                .then( () => rl.close())
                .catch(err => {
                    err;
                    rl.close()
                }));
        })
    })
};

const removeEmp = (emp,list) => {
    return new Promise( (resolve, reject) => {
        if (list.indexOf(emp) === -1) {
            reject(console.log(`${emp} Name does'nt exist`));
            return -1;
        } else {
            const idx = list.indexOf(emp);
            const newEmployeeList = list.filter( e => e !== list[idx]).join('\n');
            fs.writeFile('./Emp.txt', newEmployeeList, (err) => {
                if(err){
                    reject(console.log(err))
                } else {
                    resolve(console.log('Item has been deleted'))
                }
            });
        }
    })
};
