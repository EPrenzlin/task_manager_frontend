const api = new ApiService

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

// functions 
api.allEmployees()
.then(json => json.forEach(obj => new Employee(obj)))


api.allTasks()
.then(json => json.forEach(obj => new Task(obj)))


makeEmployee.addEventListener("submit", (e) => {
e.preventDefault()
let title = e.target.title.value
let name = e.target.name.value
let experience = e.target.experience.value
let expertise = e.target.expertise.value
makeEmployee.reset()
api.addEmployee(title, name, experience, expertise)
.then( newEmployee=> new Employee(newEmployee))
}) 





