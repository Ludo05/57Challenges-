const employeeList = ['John Smith',
    'Jackie Jackson',
    'Chris Jones',
    'Amanda Cullen',
    'Jeremy Goodwin'];

   const RemoveEmp = (emp) => employeeList.filter( e => e !== emp);

  console.log(RemoveEmp('Chris Jones'));

