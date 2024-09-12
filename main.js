const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

// Add task to the list
addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value;

    if (taskText.trim() !== "") {
        const li = document.createElement('li');

        // Create task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Mark task as complete when clicked
        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        // Remove task from list when delete button is clicked
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        // Append task text and delete button to list item
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        // Append list item to the list
        todoList.appendChild(li);

        // Clear input field
        todoInput.value = '';
    }
});