class ApiService {

    constructor(arg){
        this.cheese = arg
    }

    hello(){
        console.log("hello from API")
    }

    allEmployees(){
        return fetch(employeeLink)
        .then (response => response.json())
    }


    addEmployee(title, name, experience, expertise){
        return fetch("http://localhost:3000/employees",{
            method: "POST", 
            headers: {
            'Content-Type': 'application/json',  
            },
            body: JSON.stringify({
                name: name ,  
                title: title, 
                experience: experience, 
                expertise: expertise
            })
            }) 
            .then(response => response.json()
            )}

}