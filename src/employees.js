console.log("From employees js")
const employeeLink = "http://localhost:3000/employees"


class Employee {
    constructor(employee){
        this.name = name ; 
        this.title = title ; 
        this.experience = experience; 
    }
    
    static renderAllEmployees(){
    return fetch(employeeLink)
    .then (response => response.json())
    .then(json => json.forEach(obj => console.log(obj))) 
    }  
    // gives us an array of objects 

        renderEmployee(obj){
        obj.forEach(employee => {
        let makeEmployee = document.createElement("li") 
        makeEmployee.innerHTML = jsonItem.name 
        mainPage.appendChild(makeEmployee)
        })

        }


    }


