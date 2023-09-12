
// var header = document.getElementById('main-header');

// var addItemsTitle = document.querySelector('.title'); 
// addItemsTitle.style.color = 'green';
// header.style.borderBottom = 'solid 3px #000';


// var items = document.getElementsByClassName('list-group-item');

// items[2].style.color = 'green';

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'red';
//   items[i].style.fontWeight = 'bold';
// }

// var listItems = document.getElementsByClassName('list-group-lastItem');
// listItems[0].style.backgroundColor = 'red';
// listItems[0].style.fontWeight = 'bold';

// var li=document.getElementsByTagName('li');
// li[4].textContent='Hello';
// li[4].style.backgroundColor="grey";

//QuerySelector

var header= document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

//QuerySelectorAll
var firstLi = document.querySelector('li:nth-child(1)');
firstLi.style.color = 'green';

// Select all odd-numbered <li> elements and change their background color to green
var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}
