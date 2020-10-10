const employeeLink = "http://localhost:3000/employees"


class Employee {

static allEmployees(){
    api.allEmployees()
    .then(json => json.forEach(obj => renderEmployee(obj))) 

}

static addEmployee(){
        makeEmployee.addEventListener("submit", (e) => {
        e.preventDefault()
        let title = e.target.title.value
        let name = e.target.name.value
        let experience = e.target.experience.value
        let expertise = e.target.expertise.value

        api.addEmployee(title, name, experience, expertise) 
        .then (json => renderEmployee(json))
        })
        }

        deleteEmployee(button, div, jsonObject){
        console.log("I am being pressed")
        button.addEventListener("click", (e) => {
        e.preventDefault()
        div.remove()
        api.deleteEmployee(jsonObject)
        .then(json => console.log(json))
        })
        }


}


