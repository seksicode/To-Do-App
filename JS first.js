// let num =prompt("Enter a number:");

// if (num%5===0){
//     console.log(num,"is a multiple of 5");
// }
// else {
//     console.log(num,"is not a multiple of 5");
// }
// let score = 5;

// if (score>=90 && score<=100) {
//     console.log("Grade = A")
// }
// else if(score>=70&& score<=89) {
//     console.log("Grade = B");
// }
// else if(score>=60&&score<=69) {
//     console.log("Grade = C");
// }
// else if(score>=50&&score<=59) {
//     console.log("Grade = D");
// }
// else {
//     console.log("Grade = F");
// }

// Loop

// for (let i = 1; i <= 10; i++) {
//     console.log("Sakshi");
// }
// console.log("Hello");

// const John = require("./second");

// console.log("Hello", John)

// let http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// const Sakshi = require("./second");

// console.log(Sakshi);
// cd "C:\Users\DELL\OneDrive\Documents\js files\classroom"
// node first.js


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
