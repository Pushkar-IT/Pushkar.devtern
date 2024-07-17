function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("please enter a task");
        return;
    }

let checkBox = document.getElementById("checkBox");

//create task element
let taskElement = document.createElement("li");
taskElement.className = "tasks";
taskElement.innerHTML = `
<input type = "checkbox" class="checkClick" onclick = "completeTask(this)">
<span> ${taskText}</span>
 <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`

//append task to the list 
checkBox.appendChild(taskElement);

//clear input string
taskInput.value = " ";
}

//delete task
function deleteTask(button) {
    var taskElement = button.parentElement;
    var tasksList = document.getElementById("checkBox");
    tasksList.removeChild(taskElement);
}

function completeTask(checkbox) {
    var taskElement = checkbox.parentElement;
    var taskText = taskElement.querySelector('span');
    taskText.classList.toggle('completed');
}
