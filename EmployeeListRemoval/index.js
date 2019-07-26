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

    rl.question(`${printEmp}\n Enter the employee you want to remove? `, emp => {
        if (employeeList.indexOf(emp) === -1) {
            console.log(`${emp} Name does'nt exist`);
            rl.close();
                return
          }
        const idx = employeeList.indexOf(emp);
        const newEmployeeList = employeeList.filter( e => e !== employeeList[idx]).join('\n');
        rl.close();
        fs.writeFile('./Emp.txt', newEmployeeList, (err) => {
            if(err){
                console.log(err)
            }
        })
    });
});




