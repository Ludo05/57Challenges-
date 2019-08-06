const rl = require('../Util/consoleReadLine');
const fs = require('fs');
const {removeEmployee} = require('./removeEmployee')

 fs.readFile('./Emp.txt','utf8', (err,data) => {
    let employeeList = [];
    if(err){
        console.log(err)
    } else {
   data.split('\n').forEach( em => employeeList.push(em));
    }
    const printEmp = employeeList.forEach( emp => console.log(emp));

    rl.question(`${printEmp}\n Enter the employee you want to remove? `, emp => removeEmployee(emp,employeeList));
});






