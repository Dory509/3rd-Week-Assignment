// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addEmployee = true
  let employees = []
  while (addEmployee) {
    let firstName = prompt("employee first name")
    while(firstName == ""){
      firstName = prompt("employee first name")
    }
    let lastName = prompt("employee last name")
    while (lastName=="") { 
      lastName = prompt("employee last name")
     }
    let salary = prompt("salary")
    if(isNaN(salary)){
      salary = 0
    }
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    employees.push(employee)
    console.log(employees)
    addEmployee = confirm("Hire more employees:")
  }
  return employees

}
//let / var / const - creating variables
//const value can't be changed
//var function scope
//let block scope


//for/while - loop
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let avgSalary  = 0
  for(let i=0;i<employeesArray.length;i++){
    avgSalary += employeesArray[i].salary
  }
  avgSalary =  avgSalary / employeesArray.length
  console.log(`The average salary of ${employeesArray.length} employee(s) is ${avgSalary.toFixed(2)}` )
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomNumber= Math.floor(Math.random() * employeesArray.length)
  let randomEmployee = employeesArray[randomNumber]
  console.log (`random employee: ${randomEmployee.firstName}  ${randomEmployee.lastName} with salary package ${randomEmployee.salary}`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
