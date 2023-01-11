// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.background='#008000';
// for(var i=0;i<items.length;i++)
//  {
//     items[i].style.fontWeight='bold';
//  }


 //elements by tagname
//  var li=document.getElementsByTagName('li');
// console.log(li);
// li[2].style.background='#008000';
// for(var i=0;i<li.length;i++)
//  {
//     li[i].style.fontWeight='bold';
//  }

//using queryselector
var secondItem=document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.background='green';
var thirdItem=document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.display='none';

//using QuerySelectorALL
var secondItemFont=document.querySelector(".list-group-item:nth-child(2)");
secondItemFont.style.color='#008000';
var oddItem=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<oddItem.length;i++){

   oddItem[i].style.backgroundColor='#008000';
}
