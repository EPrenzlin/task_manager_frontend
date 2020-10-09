console.log("From employees js")
const employeeLink = "http://localhost:3000/employees"


class Employee {

static renderAllEmployees(){
    return fetch(employeeLink)
    .then (response => response.json())
    .then(json => json.forEach(obj => renderEmployee(obj))) 
    }  

}


