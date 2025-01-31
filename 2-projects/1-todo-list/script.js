

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""
  for(let i in todos){
    let li = `
    <li
      class="list-group-item d-flex justify-content-between align-items-center" id="${i}"
    >
      ${todos[i].task}
      <span class="badge bg-primary rounded-pill">
        <i class="fa fa-check" aria-hidden="true" onclick="line(this)"></i>
        <i class="fa fa-trash" aria-hidden="true" onclick="removing(this)"></i>
      </span>
    </li>
`
list.insertAdjacentHTML("beforeend", li)

  }
  
}

let todos = [
  // { task: "Wash the dishes", completed: false },
  // { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

  function addNewTodo (event){
    
    let text = document.querySelector("#todoInput")
    todos.push({task : text.value, completed:false});
    text.value = "";
    populateTodoList(todos)
    event.preventDefault();
  }


function line(event){
  
let label = event.parentElement.parentElement
let idNo = label.getAttribute("id")
console.log(idNo)
  if(label.classList.contains("lines")){
    label.classList.remove("lines")
    todos[idNo].completed = false
  }else{
    label.classList.add("lines")
    todos[idNo].completed = true
  }
  event.preventDefault()
  
}

function removing(element){

  let x = element.parentElement.parentElement.getAttribute("id")
  todos.splice(x,1)
  populateTodoList(todos)
}

document.querySelector("#filter").addEventListener("click", deleteAllCompletedTodos)

function deleteAllCompletedTodos(e) {
console.log("asdasd")
todos = todos.filter(val => val.completed == false)

populateTodoList(todos)
e.preventDefault()
}

  




