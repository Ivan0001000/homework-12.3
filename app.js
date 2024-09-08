const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTask");
const newTaskInput = document.getElementById("newTask");

addTaskBtn.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <span class="delete">[Видалити]</span>`;
    taskList.appendChild(li);
    newTaskInput.value = "";
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentElement;
    taskList.removeChild(li);
  }
});
