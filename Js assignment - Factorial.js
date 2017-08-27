
//    2. Factorial
//  Write a function that uses recursion to calculate the factorial of a number.
//  The following function call should output 120:



function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

console.log(factorial(5));


// time: 5 min