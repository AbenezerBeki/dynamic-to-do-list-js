document.addEventListener('DOMContentLoaded', function() {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask function
  function addTask(taskText) {
    // Get and trim task text
    const taskText = taskInput.value.trim();

    // Check if task is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return; // Exit the function if task is empty
    }

    // Create list item and remove button
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Add click event listener to remove button
    removeButton.addEventListener('click', function() {
      taskList.removeChild(this.parentElement);

      // Update tasks array and local storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const taskIndex = storedTasks.indexOf(taskText);
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    });

    listItem.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    // Save task to local storage (if applicable)
    if (true) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  // Attach event listeners
  addButton.addEventListener('click', function() {
    addTask(taskInput.value);
  });
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
    }
  });

  // Call loadTasks on DOMContentLoaded
  loadTasks();

});