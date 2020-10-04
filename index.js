const mainPage = document.querySelector("h2") 

// Employee.renderAllEmployees(); 

    function renderAllEmployees(){
    return fetch(employeeLink)
    .then (response => response.json())
    .then(json => json.forEach(obj => renderEmployee(obj))) 
    }  
    // gives us an array of objects 

        function renderEmployee(object){
            let newEmployee = document.createElement("p")
            newEmployee.innerHTML = object.name
            mainPage.appendChild(newEmployee)    
        }

        renderAllEmployees()

