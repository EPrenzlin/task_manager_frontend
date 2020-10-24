const taskLink = "http://localhost:3000/tasks"

class Task {
    constructor(taskObj) {
        this.urgency = taskObj.urgency;
        this.description = taskObj.description;
        this.renderTask(taskObj)
      }
      
    static addTask(div,jsonObject){
                let addTask = document.createElement("form")
                addTask.setAttribute("taskForm", jsonObject.id)
                let createTask = document.createElement("button")
                createTask.setAttribute("class", `${jsonObject.id}`)
                createTask.innerHTML = "Assign a new Task"
                
                let urgency = document.createElement("input")
                urgency.setAttribute("type", "textarea") 
                urgency.setAttribute("placeholder", "Urgency")
                
                let description = document.createElement("input")
                description.setAttribute("type", "text") 
                description.setAttribute("placeholder", "Description")
                                
                createTask.addEventListener("click", (e) => {
                    e.preventDefault()
                    console.log(e.target)
                    api.addTask(urgency,description,jsonObject)
                    .then (obj => new Task(obj))
                    })

                addTask.appendChild(urgency)
                addTask.appendChild(description)
                addTask.append(createTask)
                div.append(addTask)
                }

    renderTask(jsonObj){
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
                
                this.delete(deleteTask,div, jsonObj)

                div.appendChild(description)
                div.appendChild(urgency)
                div.appendChild(deleteTask)
                taskDiv.appendChild(div)
            }

             delete(deleteTask,div, jsonObj){
                deleteTask.addEventListener("click", (e) => {
                e.preventDefault()
                div.remove() 
                api.deleteTask(jsonObj.id)
                .then(obj => console.log(obj))
            })}

        
    }
