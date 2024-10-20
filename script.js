function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskTable = document.getElementById("taskTable").getElementsByTagName("tbody")[0];

    // Create a new row
    var newRow = taskTable.insertRow();

    // Insert task text into the first cell
    var taskCell = newRow.insertCell(0);
    taskCell.textContent = taskText;

    // Insert delete button into the second cell
    var actionCell = newRow.insertCell(1);
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskTable.deleteRow(newRow.rowIndex - 1); // Adjust for header row
    };
    actionCell.appendChild(deleteButton);

    // Clear the input field
    taskInput.value = "";
}
