const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addButton = document.querySelector(".btn");
const todoCount = document.getElementById("todoCount");
const deleteButton = document.getElementById("deleteButton");

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        const p = document.createElement("p");
        p.innerText = taskText;
        li.appendChild(checkbox);
        li.appendChild(p);
        todoList.appendChild(li);
        todoInput.value = "";
        updateTaskCount();
    }
}

function updateTaskCount() {
    const tasks = todoList.querySelectorAll("li");
    todoCount.innerText = `${tasks.length} total items`;
}

function handleCheckboxClick(e) {
    if (e.target && e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        const task = e.target.parentElement;
        if (e.target.checked) {
            task.querySelector("p").classList.add("disabled");
        } else {
            task.querySelector("p").classList.remove("disabled");
        }
    }
}

function deleteAllTasks() {
    todoList.innerHTML = "";
    updateTaskCount();
}

addButton.addEventListener("click", addTask);
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
todoList.addEventListener("click", handleCheckboxClick);
deleteButton.addEventListener("click", deleteAllTasks);
