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
        localStorage.setItem('obj',JSON.stringify(objects));
        console.log(JSON.parse(JSON.stringify(objects)));
       
        
    }
