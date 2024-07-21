document.addEventListener('DOMContentLoaded', function() {

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask(taskText) {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    removeButton.addEventListener('click', function() {
      taskList.removeChild(this.parentElement);

      //local storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const taskIndex = storedTasks.indexOf(taskText);
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    });

    listItem.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';

    if (true) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  addButton.addEventListener('click', function() {
    addTask(taskInput.value);
  });
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
    }
  });

  loadTasks();

});