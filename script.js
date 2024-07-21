document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-button-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the addTask function
  function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();

      // Check if taskText is not empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      // Create a new li element and set its textContent to taskText
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a new button element for removing the task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';

      // Assign an onclick event to the remove button to remove the li element from taskList
      removeBtn.onclick = function() {
          taskList.removeChild(li);
      };

       const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const taskIndex = storedTasks.indexOf(taskText);
        storedTasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    

      // Append the remove button to the li element, then append the li to taskList
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear the task input field
      taskInput.value = '';

       if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
  }

  // Add event listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });

  // Invoke the addTask function on DOMContentLoaded if needed (not typically required for this specific case)
  // addTask();
});