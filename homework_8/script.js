const num1 = document.querySelector('[data-js-number1-input]');
const num2 = document.querySelector('[data-js-number2-input]');
const symbolInput = document.querySelector('[data-js-operation-input]');
const resultButton = document.querySelector('[data-js-result-button]');

resultButton.addEventListener('click', event => {
  event.preventDefault();

  const firstNumberValue= num1.value.trim();
  const isFirstNumberEmpty = firstNumberValue.length === 0;
  const firstNumber = Number(firstNumberValue);
  const isFirstNumberNotNumber = isNaN(firstNumber);

  const secondNumberValue = num2.value.trim()
  const isSecondNumberEmpty = secondNumberValue.length === 0;
  const secondNumber = Number(secondNumberValue);
  const isSecondNumberNotNumber = isNaN(secondNumber);

  const symbolValue= symbolInput.value.trim();
  const isEmptySymbol = symbolValue.length === 0;
  const symbol = symbolValue;

  if (isFirstNumberNotNumber || isSecondNumberNotNumber) {
    alert('Некорректный ввод чисел');
    return;
  }
  
  if (isFirstNumberEmpty) {
      alert('Первое число не указано');
      return;
  }
  
  if (isEmptySymbol) {
    alert('Не введён знак');
    return;
  }
  
  if (isSecondNumberEmpty) {
    alert('Второе число не указано');
    return;
  }
 
  if (symbol === '/' && secondNumber === 0) {
    alert('Операция некорректна');
    return
  }
  
  switch (symbol) {
    case '+': alert(firstNumber + secondNumber); break;
    case '-': alert(firstNumber - secondNumber); break;
    case '*': alert(firstNumber * secondNumber); break;
    case '/': alert(firstNumber / secondNumber); break;
    default: alert('Программа не поддерживает такую операцию');
  } 
})