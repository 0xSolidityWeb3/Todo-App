const todos = [];
function addTodo(){
    todos.push({
        todoTask: document.querySelector("#inp").value
    })
    render();
}

function deleteTodo(index){
    todos.splice(index, 1);
    render();
}

function updateTodo(index) {
    const todo = todos[index];
    const newTask = prompt("Enter new task:", todo.todoTask);
    if (newTask) {
      todo.todoTask = newTask;
      render();
    }
}

function todoComponent(todo, index) {
    const spanEle = document.createElement("span");
    const checkboxEle = document.createElement("input");
    checkboxEle.type = "checkbox";
    checkboxEle.className = "todo-checkbox";
    const paraEle = document.createElement("p");
    paraEle.innerHTML = todo.todoTask;
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("onclick", `deleteTodo(${index})`);
    deleteBtn.setAttribute("class", `deleteBtn`);
    deleteBtn.innerHTML = "Delete";
    const updateBtn = document.createElement("button");
    updateBtn.setAttribute("onclick", `updateTodo(${index})`);
    updateBtn.setAttribute("class", `updateBtn`);
    updateBtn.innerHTML = "Update";
    spanEle.appendChild(checkboxEle);
    spanEle.appendChild(paraEle);
    spanEle.appendChild(deleteBtn);
    spanEle.appendChild(updateBtn);
    return spanEle;
  }

function render(){
    document.querySelector(".todos-list").innerHTML = "";
    for(let i=0; i<todos.length; i++){
        const element = todoComponent(todos[i], i);
        document.querySelector(".todos-list").appendChild(element);
    }
}
