var itemList=document.querySelector("#items");
 
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
//----------------------------------------
//parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
//----------------------------------------
//ChildNode
// console.log(itemList.childNodes);
//---------------------------------------
//children
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';
//----------------------------------------
//First Child
// console.log(itemList.firstChild);
//----------------------------------------
//first Element childi
//  console.log(itemList.firstElementChild);
//  itemList.firstElementChild.textContent='hello 1';
// --------------------------------------
//last Element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';
// --------------------------------------------
//next sibling
// console.log(itemList.nextElementSibling);
// --------------------------------------------
// previous sibling
// console.log(itemList.previousElementSibling);


//creating new element
var newDiv=document.createElement("div");
console.log(newDiv);
newDiv.className="hello";
newDiv.id='hello1';
newDiv.setAttribute('title','hello');

//Creating var
var newDivText=document.createTextNode('hello');
newDiv.appendChild(newDivText);

var container=document.querySelector(" header .container");
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
container.style.fontSize="40px";