var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var completer = document.getElementsByClassName("completer");
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);
    var button = document.createElement("button");
    button.setAttribute("class", "completer");
    button.textContent = "Complete";
    button.setAttribute("data-index", i);
    button.setAttribute("onclick", "completed("+ i+")")
    li.appendChild(button);
    todoList.appendChild(li);
  }
}


function completed(index){
  console.log("hello"+ index);
  todos.splice(index,1);
  renderTodos();
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

  // Re-render the list
  renderTodos();
});
