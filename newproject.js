var form=document.getElementById('my-form');
var name=document.getElementById('name');
var email=document.getElementById('email');
form.addEventListener('submit',onSubmit);
    function onSubmit(e){
        e.preventDefault();
        var nameVal=e.target.name.value;
        
        var emailVal=e.target.email.value;
  
        localStorage.setItem('name',nameVal);
        localStorage.setItem('email',emailVal);
        console.log(localStorage.getItem('name'));
    }
