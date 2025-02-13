let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({ text: taskText, completed: false });

    taskInput.value = "";
    updateList(); 
}

        
function updateList() {
    const taskList = document.getElementById("taskList");
    const noTasksMessage = document.getElementById("noTasksMessage")
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        noTasksMessage.style.display = "block";
    } else {
        noTasksMessage.style.display = "none";
    }

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));

        const span = document.createElement("span");
        span.textContent = task.text;
        span.className = task.completed ? "completed" : "";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = () => removeTask(index);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
        
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            updateList();
        }
        
        function removeTask(index) {
            tasks.splice(index, 1);
            updateList();
        }
        
        updateList();
