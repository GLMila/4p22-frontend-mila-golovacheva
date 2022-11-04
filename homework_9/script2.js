const fibonacci = (function (){
  let previousNumber = 0;
  let nextNumber = 1;
  return () => {
        console.log(nextNumber);
        let sum = previousNumber + nextNumber;
        previousNumber = nextNumber;
        nextNumber = sum;
        return nextNumber;
  }
})()

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();