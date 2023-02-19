/* From Codevolution
  Fibonacci sequence- A sequence where each number is the sume of the two numbers before it.
    The fist two numbrs are 0,1.
  expample fibonacci(2) = 0,1
  expample fibonacci(3) = 0,1,1
  expample fibonacci(7) = 0,1,1,2,3,5,8 

//Problem- given a number "n", find the first "n" elements of the Fibonacci sequence.
*/

function fibonacci(n) {
  const htmlFib = document.getElementbyId("fib");
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
