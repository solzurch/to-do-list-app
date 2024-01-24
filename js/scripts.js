//1. Adding a new item to the list of items: 

/* let li = document.createElement("li");
let inputValue = document.getElementById("input").value;
let text = document.createTextNode(inputValue);
li.appendChild(text);

if (inputValue === '') {
  alert("You must write something!");
} else {
  let list = document.querySelector('#list');
  list.appendChild(li);
} */

function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if ($('#input').val() === '') {
        alert("You must write something");
    } else {
        let list = $('#list');
        list.append(li);
    }
}