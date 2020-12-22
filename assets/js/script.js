const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password__check');
const email = document.getElementById('email');

form.addEventListener('submit', (event)=>{
         event.preventDefault();

         checkInputs();
});

function checkInputs(){
         const usernameValue = username.value.trim();
         const passwordValue= password.value.trim();
         const passworCheckValue= passwordCheck.value.trim();
         const emailValue= email.value.trim();

         if(usernameValue === ''){
                  setErrorFor(username,'Username cannot be empty');
         }else{
                  setSuccessFor(username);
         }

         if(emailValue === ''){
                  setErrorFor(email,'Email field cannot be empty');
         }else if(!isEmail(emailValue)){
                  setErrorFor(email,'Email is not valid');
         }else{
                  setSuccessFor(email); 
         }

         if(passwordValue === ''){
                  setErrorFor(password,'Password field cannot be empty');
         }else if(passwordValue.length < 5){
                  setErrorFor(password, 'Password must contain at least 5 chars')
         }else if(!isValidPassword(passwordValue)){
                  setErrorFor(password,'Password must contain at least one lower/uppercase and numeric');
         }else{
                  setSuccessFor(password);
         }

         if(passworCheckValue === ''){
                  setErrorFor(passwordCheck,'Password Check field cannot be empty');
         }else if(passwordValue !== passworCheckValue){
                  setErrorFor(passwordCheck,'Password must be the same');
         }else{
                  setSuccessFor(passwordCheck);
         }

         const div = document.querySelectorAll('small');
         
         let numberOfSuccess = 0;
         
         div.forEach(function(element){
                  if(element.parentElement.classList.contains('success')){
                           numberOfSuccess++;
                  }
         });

         if(numberOfSuccess==div.length){
                  alert('Thank you for submiting','');
         }
}

function setErrorFor(input, message){
         const formControl = input.parentElement;
         const small = formControl.querySelector('small');

         small.innerText = message;

         formControl.className = 'form__control error';
}

function setSuccessFor(input){
         const formControl = input.parentElement;
         formControl.className = 'form__control success';
}

function isEmail(email){
         return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPassword(password){
         return /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*/.test(password);
}
