var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.background='#008000';
for(var i=0;i<items.length;i++)
 {
    items[i].style.fontWeight='bold';
}
items[2].textContent="changed the background";