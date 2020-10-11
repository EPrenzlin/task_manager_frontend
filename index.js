// new api service 
const api = new ApiService 
const emp = new Employee
const task = new Task
// various constants
const mainPage = document.querySelector("h2"); 
const makeEmployee = document.getElementById("new-employee-form"); 
const submitButton = makeEmployee.querySelector('[type=Submit]');

const taskDiv = document.createElement("div")
mainPage.appendChild(taskDiv)

const employeeDiv = document.createElement("div")
mainPage.append(employeeDiv) 
    

Employee.allEmployees()
Employee.addEmployee()
Task.allTasks()

// Employee.renderEmployee()


    // render a single employee
    // function renderEmployee(jsonObject){
    //     const div = document.createElement("div")
    //     div.setAttribute("employee", jsonObject.id)
    //     const button = document.createElement("button")
    //     button.setAttribute("delete-button",jsonObject.id)
    //     button.innerHTML = "Remove from Team"

    //     div.setAttribute("class", "employee")
    //     div.setAttribute("data-set", jsonObject.id)
        
    //     const employeeTitle = document.createElement("H3")
    //     employeeTitle.innerHTML  = jsonObject.title

    //     const employeeName = document.createElement("H2")
    //     employeeName.innerHTML = jsonObject.name

    //     const employeeExperience = document.createElement("p")
    //     employeeExperience.innerHTML = jsonObject.experience 

    //     const employeeExpertise = document.createElement("p") 
    //     employeeExpertise.innerHTML = jsonObject.expertise
        
    //     div.append(employeeName)
    //     div.append(employeeTitle)
    //     div.append(employeeExperience)
    //     div.append(employeeExpertise)

    //     emp.deleteEmployee(button, div,jsonObject)  

    // ADDS A TASK
        // let addTask = document.createElement("form")
        // let createTask = document.createElement("button")
        // createTask.setAttribute("class", "newTask")
        // createTask.innerHTML = "Assign a new Task"
        // let urgency = document.createElement("input")
        // urgency.setAttribute("type", "textarea") 
        // urgency.setAttribute("placeholder", "Urgency")
        // addTask.appendChild(urgency)
        
        // createTask.addEventListener("click", (e) => {
        //     e.preventDefault()
        //     api.addTask(urgency,description,jsonObject)
        //     .then (obj => Task.singleTask(obj))
        //     })
    
        //  let description = document.createElement("input")
        // description.setAttribute("type", "text") 
        // description.setAttribute("placeholder", "Description")
    
        // addTask.appendChild(description)
        // addTask.append(createTask)
    
        // div.append(button)
        // div.append(addTask)
    
        // employeeDiv.appendChild(div)    
    // }


