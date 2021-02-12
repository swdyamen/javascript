// This is Todo list.
//you can Email me for any more information "swd.yamen@gmail.com"
//Live Demo http://sunrise-it.se/javascript/todo/index.html

let theInput = document.querySelector(".add-task input"),
  theAddButton = document.querySelector(".add-task .plus"),
  tasksContainer = document.querySelector(".tasks-content"),
  taskCount = document.querySelector(".tasks-count span"),
  taskCompleted = document.querySelector(".tasks-completed span");

window.onload = function() {
  theInput.focus();
};

theAddButton.onclick = function() {
  if (theInput.value === "") {
    console.log("No Value");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-massege");

    if (document.body.contains(document.querySelector(".no-tasks-massege"))) {
      noTasksMsg.remove();
    }

    let mainSpan = document.createElement("span"),
      deleteElment = document.createElement("span"),
      text = document.createTextNode(theInput.value),
      deleteText = document.createTextNode("Delete");

    mainSpan.appendChild(text);
    mainSpan.className = "task-box";

    deleteElment.appendChild(deleteText);
    deleteElment.className = "delete";

    mainSpan.appendChild(deleteElment);

    tasksContainer.appendChild(mainSpan);

    theInput.value = "";
    theInput.focus();
    calculateTasks();
  }
};

document.addEventListener("click", function(e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
  calculateTasks();
});

function createNoTasks() {
  let msgSpan = document.createElement("span"),
    msgText = document.createTextNode("No Tasks Yet");

  msgSpan.appendChild(msgText);
  msgSpan.className = "no-tasks-message";
  tasksContainer.appendChild(msgSpan);
}

function calculateTasks() {
  taskCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;

  taskCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
