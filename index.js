// new api service 
const api = new ApiService 
const emp = new Employee
const task = new Task
// various constants
const mainPage = document.querySelector("main"); 
const makeEmployee = document.getElementById("new-employee-form"); 
const submitButton = makeEmployee.querySelector('[type=Submit]');

const taskDiv = document.createElement("div")
taskDiv.setAttribute("class", "taskDiv")
mainPage.appendChild(taskDiv)

const employeeDiv = document.createElement("div")
employeeDiv.setAttribute("class", "all-employees")
mainPage.append(employeeDiv) 


Employee.allEmployees()
Employee.addEmployee()
Task.allTasks()


// can do a sort/  filter function here?
