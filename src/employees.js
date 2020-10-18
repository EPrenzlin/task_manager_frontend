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
        
        let titleValue = title
        let nameValue = name
        let experienceValue = experience
        let expertiseValue = expertise

        makeEmployee.reset()
    
        api.addEmployee(titleValue, nameValue, experienceValue, expertiseValue) 
        .then (json => Employee.renderEmployee(json))
        })

        }

     deleteEmployee(deleteButton, div,jsonObject){
        // Task.deleteAll(deleteButton,jsonObject,div)
        deleteButton.addEventListener("click", (e) => {
        e.preventDefault()
        div.remove()    
        api.deleteEmployee(jsonObject)
        .then(response => console.log(response))
        })
        }

    static renderEmployee(jsonObject){
        const div = document.createElement("div")
        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("delete-button",jsonObject.id)
        deleteButton.setAttribute("class", "delete")
        deleteButton.innerHTML = " Request them leave the Team"

        div.setAttribute("class", "employee")
        div.setAttribute("id", jsonObject.id)
        
        const employeeTitle = document.createElement("p")
        employeeTitle.innerHTML  = (`Title: ${jsonObject.title}`)

        const employeeName = document.createElement("H2")
        employeeName.innerHTML = jsonObject.name

        const employeeExperience = document.createElement("p")
        employeeExperience.innerHTML = (`Experience: ${jsonObject.experience}`) 

        const employeeExpertise = document.createElement("p") 
        employeeExpertise.innerHTML = (`Expertise: ${jsonObject.expertise}`)
        
        div.appendChild(employeeName)
        div.appendChild(employeeTitle)
        div.appendChild(employeeExperience)
        div.appendChild(employeeExpertise)
        div.appendChild(deleteButton)

        emp.deleteEmployee(deleteButton, div,jsonObject)

        Task.addTask(deleteButton,div,jsonObject)
        employeeDiv.appendChild(div)    
    }


}


