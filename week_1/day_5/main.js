let input = document.getElementById("input");
let tbody = document.getElementById("tableBody");

class Task {
    constructor(name) {
        this.name = name;
        this.status = false;
    }
}


function addTask(event) {
    event.preventDefault();
    let task = document.createElement("tr");
    let taskName = document.createElement("");
    let taskStatus = document.createElement("");
    let deleteTask = document.createElement("");
}



