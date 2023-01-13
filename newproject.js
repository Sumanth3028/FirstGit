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
        var delbtn=document.createElement('input');
          delbtn.type='button';
          delbtn.value='delete';
          delbtn.onclick=()=>{
            localStorage.removeItem(Myobj.email);
            parentElem.removeChild(li);
          }
          const Editbtn=document.createElement('input');
          Editbtn.type='button';
          Editbtn.value='Edit';
          Editbtn.onclick= () => {
            localStorage.removeItem(Myobj.email);
            parentElem.removeChild(li);
            document.getElementById('name').value= Myobj.name;
            document.getElementById('email').value= Myobj.email;
          }
          li.appendChild(delbtn);
          li.appendChild(Editbtn);
          parentElem.appendChild(li);
          
          
     }
     