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
    const div = document.createElement("div")
    const button = document.createElement("button")
    button.innerHTML = "Remove from Team"
    const h3 = document.createElement("h3")
    h3.innerHTML  = jsonObject.title
    div.setAttribute("class", "card")
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

    let newEmployee = document.createElement("p")
    newEmployee.innerHTML = jsonObject.name
    div.append(newEmployee)
    div.append(h3) 
    div.append(button)
    mainPage.appendChild(div)    
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
    div.setAttribute("data-set", jsonObj.id )
    const description = document.createElement("p")
    const urgency = document.createElement("h4")
    
    urgency.innerHTML = jsonObj.urgency
    description.innerHTML = jsonObj.description
    div.appendChild(description)
    div.appendChild(urgency)
    mainPage.append(div)
    }


    

renderAllEmployees()
addEmployee() 
renderAllTasks()
