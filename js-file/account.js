const form = document.getElementById('register-form');
const username = document.getElementById('username');
const country = document.getElementById('country');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const agree = document.getElementById('agree-term');
const error = document.getElementById('error');

form.addEventListener('submit', function(e){

  e.preventDefault();
  error.innerHTML = '';

  if(country.value.length <1){
    error.innerHTML += '<li>Please insert your country name</li>'
  }
  
  if(username.value.length < 5){
    error.innerHTML += '<li>Name length minimum 5</li>'
  }

  if(password.value.length < 8){
    error.innerHTML += '<li>Password is at least 8 characters</li>'
  }
  if(password.value != confirm.value){
    error.innerHTML += '<li>Confirm password is incorrect</li>'
  }

  if(agree.checked == false){
    error.innerHTML += '<li>You must agree to this term and conditions</li>'
  }

  console.log('Username :'+ username.value);
  console.log('Country :' + country.value);
  console.log('Age :' + age.value)
  console.log('Email :' + email.value);
  console.log('Password :' + password.value);
  console.log('Confirm :' + confirm.value);
  console.log('Agreed :' + agree.value);
})
