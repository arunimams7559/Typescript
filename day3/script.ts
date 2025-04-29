

//  Type Alias
type TaskPriority = "Low" | "Medium" | "High";

// Task interface
interface Task {
  readonly id: number; // Readonly 
  title: string;
  description: string;
  dueDate?: Date; // Optional
  priority: TaskPriority;
  readonly createdAt: Date; // Readonly 
}

// Function return types&parameter types
function createTask(
  id: number,
  title: string,
  description: string,
  priority: TaskPriority,
  dueDate?: string
): Task {
  return {
    id,
    title,
    description,
    priority,
    dueDate: dueDate ? new Date(dueDate) : undefined,
    createdAt: new Date(),
  };
}

// Array 
let tasks: Task[] = [];
let nextId = 1; 

// Function to render tasks
function renderTasks(): void {
  const taskList = document.getElementById("task-list")!;
  taskList.innerHTML = "";
  
  tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";

    taskCard.innerHTML = `
    <div>
      <h2>${task.title}</h2>
      <div><strong>Description:</strong> ${task.description}</div>
      <div><strong>Priority:</strong> ${task.priority}</div>
      <div><strong>Due Date:</strong> ${task.dueDate?.toDateString() || "Not Provided"}</div>
      <div><strong>Created At:</strong> ${task.createdAt?.toDateString()}</div>
    </div>
    <button class="delete-button" data-id="${task.id}">Delete</button>
  `;

    // delete button
    taskCard.querySelector(".delete-button")!.addEventListener("click", () => {
      deleteTask(task.id);
    });

    taskList.appendChild(taskCard);
  });
}

function addTask(
  title: string,
  description: string,
  priority: TaskPriority = "Medium", // Default parameter
  dueDate?: string
): void {
  const newTask = createTask(nextId++, title, description, priority, dueDate);
  tasks.push(newTask);
  renderTasks();
}

// Function to delete a task
function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

// form submission
document.getElementById("task-form")!.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form fields
  const title = (document.getElementById("title") as HTMLInputElement).value;
  const description = (document.getElementById("description") as HTMLTextAreaElement).value;
  const dueDate = (document.getElementById("dueDate") as HTMLInputElement).value;
  const priority = (document.getElementById("priority") as HTMLSelectElement).value as TaskPriority;

  
  if (title && description) {
    addTask(title, description, priority, dueDate);

   
    (document.getElementById("task-form") as HTMLFormElement).reset();
  }
});


renderTasks();