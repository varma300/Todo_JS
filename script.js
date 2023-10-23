// Create an empty array to store checklist items
let checklist = [];

// Function to add a new task to the checklist
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        checklist.push(taskText); // Add the task to the checklist array
        taskInput.value = ""; // Clear the input field
        renderChecklist(); // Update the checklist display
    }
}

// Function to render the checklist on the webpage
function renderChecklist() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the existing list

    checklist.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeTask(index);

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Function to remove a task from the checklist
function removeTask(index) {
    checklist.splice(index, 1); // Remove the task from the array
    renderChecklist(); // Update the checklist display
}

// Function to save the checklist data (You can use localStorage or send it to a server)
function saveChecklist() {
    // For this example, we'll just log the checklist array to the console
    console.log(checklist);
}

// Initialize the checklist when the page loads
renderChecklist();
