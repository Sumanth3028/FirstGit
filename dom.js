var form=document.getElementById('my-form');
var name=document.getElementById('name');
var email=document.getElementById('email');
form.addEventListener('submit',onSubmit);
    let objects=[];
    function onSubmit(e){
        e.preventDefault();
        var name=e.target.name.value;
        var email=e.target.email.value;

        var Myobj={name,email};
        objects.push(Myobj);
        localStorage.setItem(email,JSON.stringify(objects));
       showUserOnScreen(Myobj);
    }
     function showUserOnScreen(Myobj){
        const parentElem=document.getElementById("items");
        var li=document.createElement('li');
        li.textContent=Myobj.name +' - ' + Myobj.email;
        parentElem.appendChild(li);

        var delbtn=document.createElement('input');
          delbtn.id='submit';
          delbtn.className="btn btn-dark btn-sm float-right";
          delbtn.value='delete';
          li.appendChild(delbtn);
     }