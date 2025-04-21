document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('create-task-form');
    const taskInput = document.getElementById('new-task-description');
    const taskList = document.getElementById('tasks');
  
    taskForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const taskDescription = taskInput.value.trim();
  
      if (taskDescription !== '') {
        const li = document.createElement('li');
        li.textContent = taskDescription;
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input
      }
    });
  });
  