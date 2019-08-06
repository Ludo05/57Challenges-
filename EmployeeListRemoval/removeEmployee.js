const fs = require('fs');

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
