
// // var header = document.getElementById('main-header');

// // var addItemsTitle = document.querySelector('.title'); 
// // addItemsTitle.style.color = 'green';
// // header.style.borderBottom = 'solid 3px #000';


// // var items = document.getElementsByClassName('list-group-item');

// // items[2].style.color = 'green';

// // for (var i = 0; i < items.length; i++) {
// //   items[i].style.backgroundColor = 'red';
// //   items[i].style.fontWeight = 'bold';
// // }

// // var listItems = document.getElementsByClassName('list-group-lastItem');
// // listItems[0].style.backgroundColor = 'red';
// // listItems[0].style.fontWeight = 'bold';

// // var li=document.getElementsByTagName('li');
// // li[4].textContent='Hello';
// // li[4].style.backgroundColor="grey";

// //QuerySelector

// // var header= document.querySelector('#main-header');
// // header.style.borderBottom='solid 4px #ccc';

// // //QuerySelectorAll
// // var firstLi = document.querySelector('li:nth-child(1)');
// // firstLi.style.color = 'green';

// // // Select all odd-numbered <li> elements and change their background color to green
// // var odd = document.querySelectorAll('li:nth-child(odd)');

// // for (var i = 0; i < odd.length; i++) {
// //     odd[i].style.backgroundColor = 'green';
// // }


// //Traversing the DOM

// var itemList = document.querySelector('#items');

// //parentNode
// itemList.parentNode.style.backgroundColor='#f4f4f4';

// //lastElementChild
// itemList.lastElementChild.style.backgroundColor='yellow';

// //lastchild
// console.log(itemList.lastChild);
// // createchild


// // firstelementchild
// itemList.firstElementChild.style.backgroundColor='lightblue';

// // firstchild
// console.log(itemList.firstChild);

// //nextsibling
// console.log(itemList.nextSibling);

// //nextelementsibling
// console.log(itemList.nextElementSibling);

// //previoussibling
// console.log(itemList.previousSibling);

// //previouselementsibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color='orange';

// //createelement
// var div= document.createElement('div');
// div.className='hello';

// div.id='hello1';

// //setAttribute
// div.setAttribute('title','Hello Div');

// //createtesxtnode
// var divText= document.createTextNode('Hello World');

// //appendchild
// div.appendChild(divText);

// var container = document.querySelector('header .container ');
// var h1= document.querySelector('header h1');
// container.insertBefore(div, h1);

// div.style.fontSize='30px;'
// console.log(div);


// //add HEllo word before Item 1
// var ulElement = document.getElementById('items'); // Assuming 'items' is the ID of the <ul>

// //  Create textnode with the text "Hello World"
// var textNode = document.createTextNode('Hello World ');

// // Get a reference to the first <li> element
// var firstListItem = ulElement.querySelector('li:first-child');

// //  Insert the new text node before the first <li> element
// ulElement.insertBefore(textNode, firstListItem);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem= document.getElementById('item').value;
  var newItem1=document.getElementById('item1').value;

  newItem=newItem+"\n"+newItem1;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  //create edit button element
var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.style.marginLeft = "5px";


  //Add classes to edit button
  editBtn.className='btn btn-success btn-sm float-right edit';
  editBtn.style.marginRight = "5px";


  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  editBtn.appendChild(document.createTextNode('-'));

  // Append button to li
  li.appendChild(deleteBtn);
li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  

