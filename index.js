const mainPage = document.querySelector("h2") 
const makeEmployee = document.getElementById("new-employee-form")
const submitButton = makeEmployee.querySelector('[type=Submit]');
const taskDiv = document.createElement("div")
mainPage.appendChild(taskDiv)

const employeeDiv = document.createElement("div")
mainPage.append(employeeDiv) 



// Employee.renderAllEmployees(); 

    function renderAllEmployees(){
    return fetch(employeeLink)
    .then (response => response.json())
    .then(json => json.forEach(obj => renderEmployee(obj))) 
    }  
    // gives us an array of objects 
    function renderEmployee(jsonObject){
    const div = document.createElement("div")
    div.setAttribute("employee", "employee")
    const button = document.createElement("button")
    button.innerHTML = "Remove from Team"
    
    const h3 = document.createElement("h3")
    h3.innerHTML  = jsonObject.title
    div.setAttribute("class", "employee")
    div.setAttribute("data-set", jsonObject.id)

    button.addEventListener("click", (e) => {
        e.preventDefault()
        div.remove()
        return fetch(`${employeeLink}/${jsonObject.id}`,{
            method:"DELETE"
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })
    // ADDS A TASK
    let addTask = document.createElement("form")
    let createTask = document.createElement("button")
    createTask.setAttribute("class", "newTask")
    createTask.innerHTML = "Assign a new Task"
    let urgency = document.createElement("input")
    urgency.setAttribute("type", "textarea") 
    urgency.setAttribute("placeholder", "Urgency")
    addTask.appendChild(urgency)
    
    createTask.addEventListener("click", (e) => {
        e.preventDefault()
        return fetch(taskLink,{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json',
            }, 
            body: JSON.stringify({
                urgency: urgency.value,
                description: description.value,
                employee_id: jsonObject.id
        })
        })
        .then(response => response.json())
        .then (obj => renderTask(obj))
        })
 
    let description = document.createElement("input")
    description.setAttribute("type", "text") 
    description.setAttribute("placeholder", "Description")
    addTask.appendChild(description)

    addTask.append(createTask)
    
    let newEmployee = document.createElement("p")
    newEmployee.innerHTML = jsonObject.name
    div.append(newEmployee)
    div.append(h3) 
    div.append(button)
    div.append(addTask)
    employeeDiv.appendChild(div)    
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


    function renderAllTasks(){
    return fetch(taskLink)
        .then(response => response.json())
        .then(obj => obj.forEach(task => renderTask(task)))
    }

    function renderTask(jsonObj){
    const div = document.createElement("div") 
    div.setAttribute("task-class", jsonObj.id )
    const description = document.createElement("p")
    description.innerHTML = jsonObj.description
    const urgency = document.createElement("p")
    urgency.innerHTML = jsonObj.urgency

    const deleteTask = document.createElement("button") 
    deleteTask.innerHTML = "Completed Task" 

    deleteTask.addEventListener("click", (e) => {
        e.preventDefault()
        div.remove() 
        return fetch(`${taskLink}/${jsonObj.id}`,{
            method: "DELETE",
        })
        .then(response => response.json())
        .then(obj => console.log(obj))
    })
    
    urgency.innerHTML = jsonObj.urgency
    description.innerHTML = jsonObj.description
    div.appendChild(description)
    div.appendChild(urgency)
    div.appendChild(deleteTask)
    taskDiv.appendChild(div)
    }






renderAllEmployees()
addEmployee() 
renderAllTasks()
