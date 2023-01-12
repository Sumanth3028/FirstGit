var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//adding form element

form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();

    //creating a new list and appending form value init
    var newItem= document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //creating a  new delete button
    var newButton=document.createElement('button');
    newButton.className='btn btn-danger btn-sm float-right delete';
    var buttonText=document.createTextNode('X');
    newButton.appendChild(buttonText);
    li.appendChild(newButton);

    itemList.appendChild(li);

}
//function for removing items
function removeItem(e)
{
    
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//function for filtering
function filterItems(e)
{
    var text= e.target.value.toLowerCase();
    var items=document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
           var itemName=item.firstChild.textContent;
           if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block';
           }
           else{
            item.style.display='none';
           }
    })
}