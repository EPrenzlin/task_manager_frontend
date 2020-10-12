const taskLink = "http://localhost:3000/tasks"

class Task{
    
    static allTasks(){
            api.allTasks()
                .then(obj => obj.forEach(task => Task.singleTask(task)))
            }


        static addTask(div,jsonObject){
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
                    .then (obj => Task.singleTask(obj))
                    })
            
                let description = document.createElement("input")
                description.setAttribute("type", "text") 
                description.setAttribute("placeholder", "Description")
            
                addTask.appendChild(description)
                addTask.append(createTask)
                div.append(addTask)
                }

                
                
        static singleTask(jsonObj){
                let name = document.createElement("p") 
                name.innerText = "Unassigned"
                const returnName = api.employeeName(jsonObj)
                .then(json => name.innerText = `Assigned to: ${json.name}`) 
            
                const div = document.createElement("div") 
                div.setAttribute("class", "task-div")
                const description = document.createElement("p")
                description.innerHTML = (`Description: ${jsonObj.description}`)
                const urgency = document.createElement("p")
                urgency.innerHTML = (`Urgency: ${jsonObj.urgency}`)
            
                const deleteTask = document.createElement("button") 
                deleteTask.innerHTML = "Completed Task" 
            
                deleteTask.addEventListener("click", (e) => {
                    e.preventDefault()
                    div.remove() 
                    api.deleteTask(jsonObj)
                    .then(obj => console.log(obj))
                })


                div.appendChild(description)
                div.appendChild(urgency)
                div.appendChild(name)
                div.appendChild(deleteTask)
                taskDiv.appendChild(div)
            }

            nameProblem(name,json){
                if(!json.name == null){
                return name.innerText = json.name
                }
                else if (!json.name){
                console.log("INSIDE THE ELSE")
                name.innerText = "UNASSIGNED"
                }}

    }
