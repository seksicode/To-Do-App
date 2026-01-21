let taskList = document.getElementById("taskList");

function addTask(){
  let input = document.getElementById("taskInput");
  
  if(input.value === ""){
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${input.value}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  taskList.appendChild(li);
  input.value="";
}

function deleteTask(btn){
  btn.parentElement.remove();
}

function toggleTask(task){
  task.classList.toggle("completed");
}
