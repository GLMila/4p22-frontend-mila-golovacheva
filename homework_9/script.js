// если честно, сама реализовать смогла только через цикл с использованием аргумента у функции. Понимала, что нужно с использованием замыкания, но без подсказки про замыкание с return, справится не смогла бы.

const makeFibonacciFunction = () => {
  let previousNumber = 0;
  let nextNumber = 1;
  return () => {
    console.log(nextNumber);
    let sum = previousNumber + nextNumber;
    previousNumber = nextNumber;
    nextNumber = sum;
    return nextNumber;
  }
}

const fibonacci = makeFibonacciFunction ();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();

