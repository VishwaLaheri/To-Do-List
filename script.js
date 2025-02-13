let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim(); // Get input value and remove spaces

    if (taskText === "") {
        alert("Please enter a task!"); // Prevent empty tasks
        return;
    }

    tasks.push({ text: taskText, completed: false });

    taskInput.value = ""; // Clear input field
    updateList(); // Refresh UI
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

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));

        // Create task text
        const span = document.createElement("span");
        span.textContent = task.text;
        span.className = task.completed ? "completed" : "";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = () => removeTask(index);

        // Append elements to the list item
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