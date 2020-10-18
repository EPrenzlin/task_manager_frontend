const taskLink = "http://localhost:3000/tasks"

class Task{
    
    static allTasks(){
            api.allTasks()
                .then(obj => obj.forEach(task => Task.renderTask(task)))
            }


        static addTask(deleteButton,div,jsonObject){
                let addTask = document.createElement("form")
                addTask.setAttribute("taskForm", jsonObject.id)
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
                    .then (obj => Task.renderTask(obj))
                    })
            
                let description = document.createElement("input")
                description.setAttribute("type", "text") 
                description.setAttribute("placeholder", "Description")
            
                addTask.appendChild(description)
                addTask.append(createTask)
                div.append(addTask)
                }

        static renderTask(jsonObj){
                let name = document.createElement("p")                                 
                
                api.employeeName(jsonObj)
                .then(response => response.json())
                .then(json => name.innerText = `Assigned to: ${json.name}`) 

                const div = document.createElement("div") 
                div.setAttribute("class", `${jsonObj.employee_id}`)
                div.setAttribute("id", `${jsonObj.id}`)
                const description = document.createElement("p")
                description.innerHTML = (`Description: ${jsonObj.description}`)
                const urgency = document.createElement("p")
                urgency.innerHTML = (`Urgency: ${jsonObj.urgency}`)
            
                const deleteTask = document.createElement("button") 
                deleteTask.innerHTML = "Completed Task" 
                deleteTask.setAttribute("class",`delete ${jsonObj.id}`)
                
                
                Task.delete(deleteTask,div, jsonObj)

                div.appendChild(description)
                div.appendChild(urgency)
                div.appendChild(name)
                div.appendChild(deleteTask)
                taskDiv.appendChild(div)
            }


        static delete(deleteTask,div, jsonObj){
                deleteTask.addEventListener("click", (e) => {
                e.preventDefault()
                console.log(div) 
                div.remove() 
                api.deleteTask(jsonObj.id)
                .then(obj => console.log(obj))
            })}

        


        
    }
