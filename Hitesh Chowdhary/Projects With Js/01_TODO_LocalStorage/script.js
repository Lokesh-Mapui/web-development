document.addEventListener('DOMContentLoaded', () =>{
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

    tasks.forEach(task =>renderTasks(task));

    addTaskBtn.addEventListener("click", () => {
      const tasktext = todoInput.value.trim();
      if (tasktext === " ") {
        return;
      }
      const newTask = {
        id: Date.now(),
        text: tasktext,
        completed: false,
      };
      tasks.push(newTask);
      saveTasks();
      todoInput.value = " ";
      console.log(tasks);
    });

    function renderTasks(task) {
      console.log(task);
    }

    function saveTasks() {
      localStorage.setItem("Tasks", JSON.stringify(tasks));
    }
})