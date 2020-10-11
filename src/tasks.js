const taskLink = "http://localhost:3000/tasks"

class Task{
    
    
    static allTasks(){
            api.allTasks()
                .then(obj => obj.forEach(task => Task.singleTask(task)))
            }


        static addTask(){
                let addTask = document.createElement("form")
                let createTask = document.createElement("button")
                createTask.setAttribute("class", "newTask")
                createTask.innerHTML = "Assign a new Task"
                let urgency = document.createElement("input")
                urgency.setAttribute("type", "textarea") 
                urgency.setAttribute("placeholder", "Urgency")
                addTask.appendChild(urgency)
                
                createTask.addEventListener("click", (e) => {
                    e.preventDefault()
                    api.addTask(urgency,description,jsonObject)
                    .then (obj => renderTask(obj))
                    })
            
                let description = document.createElement("input")
                description.setAttribute("type", "text") 
                description.setAttribute("placeholder", "Description")
            
                addTask.appendChild(description)
                addTask.append(createTask)
                }

                
                
        static singleTask(jsonObj){
                let name = document.createElement("p") 
                const returnName = api.employeeName(jsonObj)
                .then(json => name.innerText = json.name)                
            
                const div = document.createElement("div") 
                div.setAttribute("task-class", jsonObj.id )
                const description = document.createElement("p")
                description.innerHTML = jsonObj.description
                const urgency = document.createElement("p")
                urgency.innerHTML = jsonObj.urgency
            
                const deleteTask = document.createElement("button") 
                deleteTask.innerHTML = "Completed Task" 
            
                deleteTask.addEventListener("click", (e) => {
                    e.preventDefault()
                    div.remove() 
                    api.deleteTask(jsonObj)
                    .then(obj => console.log(obj))
                })
                urgency.innerHTML = jsonObj.urgency
                description.innerHTML = jsonObj.description
                div.appendChild(description)
                div.appendChild(urgency)
                div.appendChild(name)
                div.appendChild(deleteTask)
                taskDiv.appendChild(div)
            }
    }
