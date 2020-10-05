const mainPage = document.querySelector("h2") 
const makeEmployee = document.getElementById("new-employee-form")
const submitButton = makeEmployee.querySelector('[type=Submit]');



// Employee.renderAllEmployees(); 

    function renderAllEmployees(){
    return fetch(employeeLink)
    .then (response => response.json())
    .then(json => json.forEach(obj => renderEmployee(obj))) 
    }  
    // gives us an array of objects 
    function renderEmployee(jsonObject){
    let newEmployee = document.createElement("p")
    newEmployee.innerHTML = jsonObject.name
    mainPage.appendChild(newEmployee)    
    }

    function addEmployee(){
    makeEmployee.addEventListener("submit", (e) => {
    e.preventDefault()
    
    return fetch("http://localhost:3000/employees",{
    method: "POST", 
    headers: {
    'Content-Type': 'application/json',  
    },
    body: JSON.stringify({
        name: e.target.name.value, 
        title: e.target.title.value, 
        experience: e.target.expertise.value
    })
    }) 
    .then(response => response.json()
    .then (json => renderEmployee(json)))
    })} 

    

renderAllEmployees()
// renderEmployee()
addEmployee() 
