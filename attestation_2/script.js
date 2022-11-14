'use strict'

const email = document.querySelector('[data-js-email-input]');
const password = document.querySelector('[data-js-password-input]');
const confirmPassword = document.querySelector('[data-js-confirm-input]');
const resultButton = document.querySelector('[data-js-result-button]');
const form = document.querySelector('[data-js-form]')

resultButton.addEventListener('click', event => {
  event.preventDefault();

  const emailValue= email.value.trim();
  const isEmailEmpty= emailValue.length === 0;
  const isEmailNotEmpty= emailValue.length > 0;
  const passwordValue= password.value.trim();
  const isPasswordEmpty= passwordValue.length === 0;
  const confirmPasswordValue= confirmPassword.value.trim();
  const isConfirmPasswordEmpty= confirmPasswordValue.length === 0;

  document.getElementById("email-error").innerHTML = '';
  document.getElementById("password-error").innerHTML = '';
  document.getElementById("confirm-error").innerHTML = '';
  email.style.border = '';
  password.style.border = '';
  confirmPassword.style.border = '';

  let isAllCorrect = true;
  // 1
  if (isEmailEmpty) {
    email.style.border = '1px solid #ff0000';
    document.getElementById("email-error").innerHTML = 'Поле обязательно для заполнения';
    isAllCorrect=false;
  };
  // 2
  if (isEmailNotEmpty) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(emailValue) == false) {
      email.style.border = '1px solid #ff0000';
      document.getElementById("email-error").innerHTML = 'Email введен некорректно';
      isAllCorrect=false;
      };
  }
  // 3
  if (isPasswordEmpty) {
    password.style.border = '1px solid #ff0000';
    document.getElementById("password-error").innerHTML = 'Поле обязательно для заполнения';
    isAllCorrect=false;
  };
  // 4
  if ( passwordValue.length < 8) {
    password.style.border = '1px solid #ff0000';
    document.getElementById("password-error").innerHTML = 'Пароль должен содержать не менее 8 символов';
    isAllCorrect=false;
  };
  // 5
  if (isConfirmPasswordEmpty || (confirmPasswordValue !== passwordValue)) {
    password.style.border = '1px solid #ff0000';
    confirmPassword.style.border = '1px solid #ff0000';
    document.getElementById("confirm-error").innerHTML = 'Пароли не совпадают';
    isAllCorrect=false;
  };


  if (isAllCorrect)
  {
    const formData = new FormData(form);
    const object = {};
    formData.forEach(function(value, key){
      object[key] = value;
  });

    console.log(object);
  }

})
