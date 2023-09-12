
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

// var header= document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// //QuerySelectorAll
// var firstLi = document.querySelector('li:nth-child(1)');
// firstLi.style.color = 'green';

// // Select all odd-numbered <li> elements and change their background color to green
// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }


//Traversing the DOM

var itemList = document.querySelector('#items');

//parentNode
itemList.parentNode.style.backgroundColor='#f4f4f4';

//lastElementChild
itemList.lastElementChild.style.backgroundColor='yellow';

//lastchild
console.log(itemList.lastChild);
// createchild


// firstelementchild
itemList.firstElementChild.style.backgroundColor='lightblue';

// firstchild
console.log(itemList.firstChild);

//nextsibling
console.log(itemList.nextSibling);

//nextelementsibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color='orange';

//createelement
var div= document.createElement('div');
div.className='hello';

div.id='hello1';

//setAttribute
div.setAttribute('title','Hello Div');

//createtesxtnode
var divText= document.createTextNode('Hello World');

//appendchild
div.appendChild(divText);

var container = document.querySelector('header .container ');
var h1= document.querySelector('header h1');
container.insertBefore(div, h1);

div.style.fontSize='30px;'
console.log(div);


//add HEllo word before Item 1
var ulElement = document.getElementById('items'); // Assuming 'items' is the ID of the <ul>

//  Create textnode with the text "Hello World"
var textNode = document.createTextNode('Hello World ');

// Get a reference to the first <li> element
var firstListItem = ulElement.querySelector('li:first-child');

//  Insert the new text node before the first <li> element
ulElement.insertBefore(textNode, firstListItem);


