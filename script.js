document.addEventListener('DOMContentLoaded', function() {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from local storage (optional)
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskInput => addTask(taskInput, false)); // Don't save again when loading
  }

  // Create the addTask function
  function addTask(taskInput, save = true) {
    // Get and trim task text
    taskInput= taskInput.value.trim();

    // Check if task is empty
    if (taskInput === "") {
      alert("Please enter a task!");
      return; // Exit the function if task is empty
    }

    // Create list item and remove button
    const listItem = document.createElement('li');
    listItem.textContent = taskInput;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Add click event listener to remove button
    removeButton.addEventListener('click', function() {
      taskList.removeChild(this.parentElement);

      // Update tasks array and local storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const taskIndex = storedTasks.indexOf(taskInput);
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    });

    // Create a checkbox for marking tasks as complete
    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.classList.add('complete-checkbox');

    // Add click event listener to checkbox
    completeCheckbox.addEventListener('click', function() {
      listItem.classList.toggle('completed'); // Toggle completed class
    });

    // Append elements and clear input field
    listItem.prepend(completeCheckbox);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = "";

    // Save task to local storage (if applicable)
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskInput);
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