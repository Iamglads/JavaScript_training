class List {
  constructor() {
    this.enterTask = document.querySelector(".tache");
    this.add = document.querySelector(".btn-add");
    this.displayList = document.querySelector(".list");
    this.clear = document.querySelector(".clear");
    this.edit = document.querySelector(".fa-edit");
    this.taskList = [];
  }

  init() {
    this.add.addEventListener("click", (event) => {
      event.preventDefault();
      this._add();
    });
    this.clear.addEventListener("click", this._deleteAll());
    // this.edit.addEventListener("click", this._edit());
  }

  _add() {
    let task = this.enterTask.value;
    const id = new Date().getTime().toString();
    const feedback = document.querySelector(".feedback");

    if (task == "") {
      feedback.innerHTML = "Veuillez rentrer une tâche!";
      feedback.style.color = "red";
    } else {
      this.addInStorage(id, task);
      this.displayTasks();
    }
  }

  displayTasks() {
    let taskList = this._getStorage();
    //console.log(taskList);
    taskList.forEach((item) => {
      this.displayList.innerHTML += `<article class="list-item" data-id="${item.id}>
        <p class="title">${item.value}</p>
        <di class"btn-actions">
            <!-- Modifier la tâche -->
            <i class="fas fa-edit"></i>
            <!-- supprimer la tâche -->
            <i class="fas fa-trash"></i>
        </di>
      </article>`;
    });
  }

  addInStorage(id, value) {
    const task = { id, value };
    let items = this._getStorage();
    items.push(task);
    localStorage.setItem("taskList", JSON.stringify(items));
  }

  _getStorage() {
    // retourner le tableau taskList de locacol storage ou retourner un tableau vide
    return localStorage.getItem("taskList")
      ? JSON.parse(localStorage.getItem("taskList"))
      : [];
  }

  _deleteAll() {
    localStorage.removeItem("taskList");
  }

  _deleteTask(e) {
    e.preventDefault();
    console.log("Suprimé");
  }

  _editTask(e) {
    e.preventDefault();
    console.log("Modifié");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  //console.log("test");
  const init = new List();
  init.init();
});
