class ApiService {

    // constructor(arg){
    //     this.cheese = arg
    // }

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

    deleteEmployee(jsonObject){
        return fetch(`${employeeLink}/${jsonObject.id}`,{
        method:"DELETE"
        })
        .then(response => response.json())   
    }

    addTask(urgency, description,jsonObject){
        return fetch(taskLink,{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json',
            }, 
            body: JSON.stringify({
                urgency: urgency.value,
                description: description.value,
                employee_id: jsonObject.id
                   })
            })
        .then(response => response.json())
    }

    allTasks(){
        return fetch(taskLink)
        .then(response => response.json())
    }

    deleteTask(jsonObj){
        return fetch(`${taskLink}/${jsonObj.id}`,{
            method: "DELETE",
        })
        .then(response => response.json())
    }
}