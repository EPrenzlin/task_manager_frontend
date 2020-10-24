const employeeLink = "http://localhost:3000/employees"

class Employee {
    constructor(jsonObject){
        this.name = jsonObject.name 
        this.title = jsonObject.title 
        this.experience = jsonObject.experience 
        this.expertise = jsonObject.expertise
        this.id = jsonObject.id
        this.renderEmployee(jsonObject)
    }

    deleteEmployee(deleteButton, div,jsonObject){
        deleteButton.addEventListener("click", (e) => {
        e.preventDefault()
        div.remove()    
        api.deleteEmployee(jsonObject)
        .then(response => console.log(response))
        })
        }
        

    renderEmployee(jsonObject){
        const div = document.createElement("div")
        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("delete-button",jsonObject.id)
        deleteButton.setAttribute("class", "delete")
        deleteButton.innerHTML = " Leave the Team"

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

        this.deleteEmployee(deleteButton, div,jsonObject)

        Task.addTask(div,jsonObject)

        employeeDiv.appendChild(div)    
    }



}


