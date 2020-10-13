class ApiService {

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
            )
            .catch(error => { 
                console.log(error)
            })
        }

    deleteEmployee(jsonObject){
        return fetch(`${employeeLink}/${jsonObject.id}`,{
        method:"DELETE"
        })
    }

    employeeName(jsonObject){
        return fetch(`http://localhost:3000/tasks/${jsonObject.id}`)
        .then(response => response.json())
        }

    addTask(urgency, description,jsonObject){
        let urgencyValue = urgency.value
        let descriptionValue = description.value
        urgency.value = ""
        description.value = ""
        debugger
        return fetch(taskLink,{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json',
            }, 
            body: JSON.stringify({
                urgency: urgencyValue,
                description: descriptionValue,
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
        console.log("is this working?")
        return fetch(`${taskLink}/${jsonObj.id}`,{
            method: "DELETE"
        })
        }


    employeeTaskTracker(){
        return fetch(`${employeeLink}`)
    }
}