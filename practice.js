
var header = document.getElementById('main-header');

var addItemsTitle = document.querySelector('.title'); 
addItemsTitle.style.color = 'green';
header.style.borderBottom = 'solid 3px #000';


var items = document.getElementsByClassName('list-group-item');

items[2].style.color = 'green';

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'red';
  items[i].style.fontWeight = 'bold';
}
