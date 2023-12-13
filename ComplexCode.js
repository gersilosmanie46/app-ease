/*
   Filename: ComplexCode.js
   Content: An example of a sophisticated, elaborate, and complex JavaScript code.
*/

// Helper function to generate a random number between min and max inclusive
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Define an array of objects representing employees
const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer", salary: 60000 },
  { id: 2, name: "Jane Smith", position: "UI/UX Designer", salary: 50000 },
  { id: 3, name: "Mike Johnson", position: "Project Manager", salary: 70000 },
  // ... Add more employees
];

// Function to calculate the total salary of employees
function calculateTotalSalary(employeeArray) {
  let totalSalary = 0;
  for (let i = 0; i < employeeArray.length; i++) {
    totalSalary += employeeArray[i].salary;
  }
  return totalSalary;
}

// Function to find the employee with the highest salary
function findHighestSalary(employeeArray) {
  let highestSalary = -Infinity;
  let highestSalaryEmployee;
  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].salary > highestSalary) {
      highestSalary = employeeArray[i].salary;
      highestSalaryEmployee = employeeArray[i];
    }
  }
  return highestSalaryEmployee;
}

// Function to randomly assign projects to employees
function assignProjects(employeeArray, projectCount) {
  const projects = ["Project A", "Project B", "Project C", "Project D"];
  for (let i = 0; i < projectCount; i++) {
    const randomEmployeeIndex = getRandomNumber(0, employeeArray.length - 1);
    const randomProjectIndex = getRandomNumber(0, projects.length - 1);
    const employee = employeeArray[randomEmployeeIndex];
    const project = projects[randomProjectIndex];
    if (!employee.projects) {
      employee.projects = [];
    }
    employee.projects.push(project);
  }
}

// Function to print employee details
function printEmployeeDetails(employeeArray) {
  for (let i = 0; i < employeeArray.length; i++) {
    const employee = employeeArray[i];
    console.log("Employee ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Position:", employee.position);
    console.log("Salary:", employee.salary);
    if (employee.projects) {
      console.log("Projects:", employee.projects.join(", "));
    }
    console.log("----------------------");
  }
}

// Main execution starts here

// Calculate and print the total salary of all employees
const totalSalary = calculateTotalSalary(employees);
console.log("Total Salary of Employees:", totalSalary);
console.log("----------------------");

// Find and print the employee with the highest salary
const highestSalaryEmployee = findHighestSalary(employees);
console.log("Employee with the Highest Salary:");
console.log(highestSalaryEmployee);
console.log("----------------------");

// Assign random projects to employees
assignProjects(employees, 5);

// Print the updated employee details
printEmployeeDetails(employees);