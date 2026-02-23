document.addEventListener('DOMContentLoaded', () =>{
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

    tasks.forEach(task =>renderTasks(task));

    addTaskBtn.addEventListener("click", () => {
      const tasktext = todoInput.value.trim();
      if (tasktext === "") {
        return;
      }
      const newTask = {
        id: Date.now(),
        text: tasktext,
        completed: false,
      };
      tasks.push(newTask);
      renderTasks(newTask);
      saveTasks();
      todoInput.value = "";
      console.log(tasks);
    });

    todoInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });


    function renderTasks(task) {
      const li = document.createElement("li");
      li.setAttribute("data-id", task.id);
      if(task.completed) li.classList.add("completed");
      li.innerHTML = `<span>${task.text}</span>
      <button class="delete-btn">Delete</button>`;

      li.addEventListener("click", (e) =>{
        if(e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();
      });
      li.querySelector("button").addEventListener("click", (e) =>{
        e.stopPropagation();
        tasks = tasks.filter(t => t.id !== task.id);
        li.remove();
        saveTasks();
      })

      todoList.appendChild(li)
    }

    function saveTasks() {
      localStorage.setItem("Tasks", JSON.stringify(tasks));
    }
});