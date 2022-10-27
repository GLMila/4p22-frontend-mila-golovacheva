'use strict';

const num1 = document.querySelector('[data-js-number1-input]');
const num2 = document.querySelector('[data-js-number2-input]');
const symbolInput = document.querySelector('[data-js-operation-input]');
const result = document.querySelector('[data-js-button-input]');

result.addEventListener('click', event => {
  event.preventDefault();

  const isEmpty1 = num1.value.trim().length === 0;
  const number1 = Number(num1.value.trim());
  const isNotNumber1 = isNaN(number1);

  const isEmpty2 = num2.value.trim().length === 0;
  const number2 = Number(num2.value.trim());
  const isNotNumber2 = isNaN(number2);

  const isEmptySymbol = symbolInput.value.trim().length === 0;
  const symbol = symbolInput.value.trim();

  if (isNotNumber1 || isNotNumber2) {
    alert('Некорректный ввод чисел');
    return;
  }
  
  if (isEmpty1) {
      alert('Первое число не указано');
      return;
  }
  
  if (isEmptySymbol) {
    alert('Не введён знак');
    return;
  }
  
  if (isEmpty2) {
    alert('Второе число не указано');
    return;
  }
 
  if (symbol === '/' && number2 === 0) {
    alert('Операция некорректна');
    return
  }
  
  switch (symbol) {
    case '+': alert(number1 + number2); break;
    case '-': alert(number1 - number2); break;
    case '*': alert(number1 * number2); break;
    case '/': aleert(number1/number2); break;
    default: alert('Программа не поддерживает такую операцию');
  } 
})