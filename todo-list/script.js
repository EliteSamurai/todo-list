// Function to add a new task to the list
function addTask() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');
    
    // Check if input is empty before adding a task
    if (input.value.trim() === '') {
        console.log('Task input is empty');
        return;
    }

    // Create a new list item (li) and text node with the task input value
    const newItem = document.createElement('li');
    newItem.style.padding = '0 5px';
    const taskText = document.createTextNode(input.value);

    // Append the text node to the new list item
    newItem.appendChild(taskText);

    // Create a delete button for each new task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    Object.assign(deleteBtn.style, {
        padding: '5px',
        fontSize: '12px',
        borderRadius: '5px',
        margin: '5px',
        backgroundColor: 'black',
        color: 'white'
    });

    // Append delete button to the new list item
    newItem.appendChild(deleteBtn);

    // Add task to the task list
    list.appendChild(newItem);

    // Clear input field
    input.value = '';

    // Add event listeners for delete and complete task functionality
    deleteBtn.addEventListener('click', deleteTask);
    newItem.addEventListener('click', completeTask);
}

// Function to toggle 'completed' class when a task is clicked
function completeTask(event) {
    const task = event.target;
    task.classList.toggle('completed'); // Toggle 'completed' class
}

// Function to delete a task
function deleteTask(event) {
    const task = event.target.parentElement; // Target the parent element (li)
    task.remove(); // Remove the task from the DOM
}

// Event listener for adding a new task
document.getElementById('taskInput').addEventListener('click', addTask);

// Add event listeners to all existing tasks for completion and deletion
function initializeTasks() {
    const tasks = document.querySelectorAll('#taskList li'); // Select all tasks
    tasks.forEach(task => {
        const deleteBtn = task.querySelector('button');
        task.addEventListener('click', completeTask);
        deleteBtn.addEventListener('click', deleteTask);
    });
}

// Initialize tasks when the page loads
window.onload = initializeTasks;