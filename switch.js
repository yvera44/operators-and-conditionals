// Employee
let employee = {
    firstName: "Yair",
    lastName: "Vera",
    startDate: new Date(2024, 1, 1),
    numYearsService: 6,
    isActive: true,
    department: "Engineering",
    title: "VP"
};

switch (employee.department) {
    case 'Engineering':
        console.log('Meet in Building 1');
        break;

    case 'Marketing':
        console.log('Metting in Building 2')
        break; 
    
    case 'HR':
        console.log('Meeting in Building 1')
        break;
    
    default:
        console.log('Meeting in Building 3')
    
}

switch (employee.department) {
    case 'Engineering':
    case 'HR':
        console.log('Meet in Building 1');
        break;

    case 'Marketing':
        console.log('Metting in Building 2')
        break; 
    
    default:
        console.log('Meeting in Building 3')
    
}
