document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.getElementById("create-task-form");  
  //listener to create table rows from submitted text
  form.addEventListener("submit", function(e)
  {      
    e.preventDefault();  
    let button = addInputToTable();//just returns a button
    clearTextBox();
    //listener that deletes the row from the table on click
    button.addEventListener("click",function(e)
    {
      deleteButton(button);
    });   
  });
});
//remove entire row that button is in
function deleteButton(button)
{
  button.parentNode.parentNode.remove();
}

//clears text box from form
function clearTextBox()
{
  document.getElementsByTagName("input")[0].value = "";
}
//returns button, not the table or tr
//creates table with text data
function addInputToTable()
{
  let input = document.getElementsByTagName("input")[0];
  let tr = document.createElement("tr");
  //create 2 empty tds
  let td = [];
  td[0] = document.createElement("td");
  td[1] = document.createElement("td");
  
  //tds
  td[0].textContent = input.value;
  let button = document.createElement("button");
  button.style.height = '15px'
  button.className = 'delete-button'  
  td[1].appendChild(button)
  
  //make table
  table = document.getElementById('table-tasks');
  //add tr to doc
  table.appendChild(tr);
  //add td to tr
  tr.appendChild(td[0]);
  tr.appendChild(td[1]);
  return button;
}

//tables worked better for us than ul's
// //creates li within ul with content of the text input on form
// function addInputToLi()
// {
//   let input = document.getElementsByTagName("input")[0]
//   let li = document.createElement("li");
//   li.textContent = input.value;  
//   document.getElementById("tasks").appendChild(li);
// }