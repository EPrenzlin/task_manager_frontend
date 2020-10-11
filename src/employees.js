const employeeLink = "http://localhost:3000/employees"


class Employee {

static allEmployees(){
    api.allEmployees()
    .then(json => json.forEach(obj => Employee.renderEmployee(obj))) 

}

static addEmployee(){
        makeEmployee.addEventListener("submit", (e) => {
        e.preventDefault()
        let title = e.target.title.value
        let name = e.target.name.value
        let experience = e.target.experience.value
        let expertise = e.target.expertise.value

        api.addEmployee(title, name, experience, expertise) 
        .then (json => Employee.renderEmployee(json))
        })
        }

     deleteEmployee(button, div, jsonObject){
        button.addEventListener("click", (e) => {
        console.log("from deleting employee")
        e.preventDefault()
        div.remove()
        api.deleteEmployee(jsonObject)
        .then(json => console.log(json))
        })
        }

    static renderEmployee(jsonObject){
        const div = document.createElement("div")
        div.setAttribute("employee", jsonObject.id)
        const button = document.createElement("button")
        button.setAttribute("delete-button",jsonObject.id)
        button.innerHTML = "Remove from Team"

        div.setAttribute("class", "employee")
        div.setAttribute("data-set", jsonObject.id)
        
        const employeeTitle = document.createElement("H3")
        employeeTitle.innerHTML  = jsonObject.title

        const employeeName = document.createElement("H2")
        employeeName.innerHTML = jsonObject.name

        const employeeExperience = document.createElement("p")
        employeeExperience.innerHTML = jsonObject.experience 

        const employeeExpertise = document.createElement("p") 
        employeeExpertise.innerHTML = jsonObject.expertise
        
        div.append(employeeName)
        div.append(employeeTitle)
        div.append(employeeExperience)
        div.append(employeeExpertise)
        div.append(button)

        emp.deleteEmployee(button, div,jsonObject)  
    
        Task.addTask(div,jsonObject)

        employeeDiv.appendChild(div)    
    }

}


