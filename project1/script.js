const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {

  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small')
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';

}

function isValidEmail(email){

  if(email.value.indexOf('@')!= -1 ) {

    let array = []

    array = email.value.split('@');

      if(array[1].indexOf('.') != -1) {
    
        alert('Correct')
    
      } else {
    
        alert('!!')
    
      }

  } else {
      alert("!!");

  }
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, "UserName is required");
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, "Email is required");
  } else {
    isValidEmail(email)
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, "password2 is required");
  } else {
    showSuccess(password2);
  }

})