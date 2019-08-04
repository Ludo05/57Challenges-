const rl = require('../Util');
const fs = require('fs');

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


 module.exports.removeEmployee = (emp,list) => {
     if (list.indexOf(emp) === -1) {
         console.log(`${emp} Name does'nt exist`);
         return -1;
     }
     const idx = list.indexOf(emp);
     const newEmployeeList = list.filter( e => e !== list[idx]).join('\n');
     fs.writeFile('./Emp.txt', newEmployeeList, (err) => {
         if(err){
             console.log(err)
         }
     });
     return 1;
 };




