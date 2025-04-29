// Function return types&parameter types
function createTask(id, title, description, priority, dueDate) {
    return {
        id: id,
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        createdAt: new Date()
    };
}
// Array 
var tasks = [];
var nextId = 1;
// Function to render tasks
function renderTasks() {
    var taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var _a, _b;
        var taskCard = document.createElement("div");
        taskCard.className = "task-card";
        taskCard.innerHTML = "\n    <div>\n      <h2>".concat(task.title, "</h2>\n      <div><strong>Description:</strong> ").concat(task.description, "</div>\n      <div><strong>Priority:</strong> ").concat(task.priority, "</div>\n      <div><strong>Due Date:</strong> ").concat(((_a = task.dueDate) === null || _a === void 0 ? void 0 : _a.toDateString()) || "Not Provided", "</div>\n      <div><strong>Created At:</strong> ").concat((_b = task.createdAt) === null || _b === void 0 ? void 0 : _b.toDateString(), "</div>\n    </div>\n    <button class=\"delete-button\" data-id=\"").concat(task.id, "\">Delete</button>\n  ");
        // delete button
        taskCard.querySelector(".delete-button").addEventListener("click", function () {
            deleteTask(task.id);
        });
        taskList.appendChild(taskCard);
    });
}
function addTask(title, description, priority, // Default parameter
dueDate) {
    if (priority === void 0) { priority = "Medium"; }
    var newTask = createTask(nextId++, title, description, priority, dueDate);
    tasks.push(newTask);
    renderTasks();
}
// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    renderTasks();
}
// form submission
document.getElementById("task-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form fields
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var dueDate = document.getElementById("dueDate").value;
    var priority = document.getElementById("priority").value;
    if (title && description) {
        addTask(title, description, priority, dueDate);
        document.getElementById("task-form").reset();
    }
});
renderTasks();
