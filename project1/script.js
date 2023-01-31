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

function isValidEmail(email) {

  if (email.value.indexOf('@') != -1) {

    let array = []

    array = email.value.split('@');

    if (array[1].indexOf('.') != -1) {

      if (array[1].substr(array[1].indexOf('.') + 1) === '') {
        showError(email, "이메일 형식에 어긋납니다.")
      } else {
        showSuccess(email);
      }

    } else {

      showError(email, "이메일 형식에 어긋납니다.")
    }

  } else {
    showError(email, "이메일 형식에 어긋납니다.")

  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (item) {
    if (item.value.trim() === '') {
      console.log(item)
      showError(item, `${getFieldName(item)} is required`)
    } else {
      showSuccess(item)
    }
  });

}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {

    showError(input, `${getFieldName(input)} must be less than ${max} characters`)

  } else {
    showSuccess(input)
  }



}

function getFieldName(input) {

  return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}


// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  isValidEmail(email)
})