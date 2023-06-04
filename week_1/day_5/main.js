class Task {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }

  static fromJSON(json) {
    return new Task(json.name, json.status);
  }

  toggle() {
    this.status = !this.status;
  }
}

class UI {
  constructor() {
    this.form = document.getElementById("form");

    this.name = document.getElementById("input");

    this.tableBody = document.getElementById("tableBody");

    this.form.addEventListener("submit", (e) => this.addTask(e));

    this.tasks = [];
    this.loadFromLocalStorage();
    this.renderTable();
  }

  renderTable() {
    this.tableBody.innerHTML = "";

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const tr = this.createTableRow(task);
      this.tableBody.appendChild(tr);
    }
  }

  addTask(event) {
    event.preventDefault();

    if (this.name.value == "") {
      return;
    }

    const task = new Task(this.name.value, false);

    this.tasks.push(task);

    this.saveToLocalStorage();
    this.renderTable();
    this.name.value = "";
  }

  createTableRow(task) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    const tdStatus = document.createElement("td");

    tdName.innerHTML = task.name;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "form-check-input";
    if (task.status) {
      check.checked = true;
    }
    check.addEventListener("change", () => this.update(task));
    tdStatus.appendChild(check);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-danger btn-sm");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => this.delete(task));
    const tdButton = document.createElement("td");
    tdButton.appendChild(deleteButton);

    tr.appendChild(tdName);
    tr.appendChild(tdStatus);
    tr.appendChild(tdButton);

    return tr;
  }

  delete(task) {
    this.loadFromLocalStorage();

    this.tasks = this.tasks.filter((x) => {
      return task.name !== x.name;
    });

    this.saveToLocalStorage();
    this.renderTable();
  }

  update(task) {
    this.loadFromLocalStorage();
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].name == task.name) {
        this.tasks[i].toggle();
      }
    }
    this.saveToLocalStorage();
    this.renderTable();
  }

  saveToLocalStorage() {
    const json = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", json);
  }

  loadFromLocalStorage() {
    const json = localStorage.getItem("tasks");
    if (json) {
      const arr = JSON.parse(json);
      this.tasks = arr.map((x) => Task.fromJSON(x));
    }
  }
}

const ui = new UI();
