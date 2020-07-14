document.addEventListener("DOMContentLoaded", (e) => {
 
});


// 1. rewrite the submit buttons event function with preventDefault()
// 2. 

let form = document.getElementById("create-task-form")
let button = document.getElementsByTagName("input")[1]

let listen = button.addEventListener("click", function(e){
  e.preventDefault();
  let input = document.getElementsByTagName("input")[0]
  let li = document.createElement("li");
  li.textContent = input.value;
  input.value = ""
  // console.log(li);
  document.getElementById("tasks").appendChild(li);
  // console.log(form)
  // console.log(button)
  // console.log(text)
});


