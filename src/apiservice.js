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
            .then(response => response.json())
            };

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

    deleteTask(id){
        return fetch(`${taskLink}/${id}`,{
            method: "DELETE",
            headers:{
                'Content-type': 'application/json' 
               },
        })
        .then (response => console.log(response))
    }




    showTask(jsonObject){
        return fetch(`http://localhost:3000/show_task/${jsonObject.id}`)
        .then(response => response.json())
    }





}