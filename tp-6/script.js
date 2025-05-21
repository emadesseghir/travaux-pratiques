document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = input.value.trim();

    if (taskText) {
      addTask(taskText);
      input.value = "";
      input.focus();
    }
  });

  function addTask(text) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = text;

    const deleteBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    doneBtn.className = "done-btn";
    // Replace text with icon
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    li.appendChild(taskSpan);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Mark as completed
    doneBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Delete task
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      li.style.transform = "translateX(100%)";
      li.style.opacity = "0";
      setTimeout(() => li.remove(), 300);
    });
  }
});
