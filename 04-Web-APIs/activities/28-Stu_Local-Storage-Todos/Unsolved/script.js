var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];
var storedTodos = JSON.parse(localStorage.getItem);
if storedTodos === "" {

var newTodos
}
//checkto see if there's anything in local storage for todos
init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

function init() {
  // Write code here to check if there are todos in localStorage
  // If so, parse the value from localStorage and assign it to the todos variable
console.log(localStorage);
if (localStorage.getItem("toDoItem")) {
  todos = JSON.parse(localStorage)
}

renderTodos();

// Store updated todos in localStorage, re-render the list
}

function storeTodos() {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage

}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});
