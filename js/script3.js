// Function declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Function expression
  const add = function (a, b) {
    return a + b;
  };
  
  // Arrow function
  const multiply = (a, b) => a * b;
  
  
  // Calling functions
  greet("Swati"); // Output: Hello, Alice!
  
  const result = add(2, 3);
  console.log(result); // Output: 5
  
  const product = multiply(4, 5);
  console.log(product); // Output: 20
  
  // Function with default parameter
  function say(message = "Hello!") {
    console.log(message);
  }
  
  say(); // Output: Hello!
  say("Hi there!"); // Output: Hi there!
  
  // Function with rest parameter
  function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  const totalSum = sum(1, 2, 3, 4, 5);
  console.log(totalSum); // Output: 15
  
  // Function with callback
  function calculate(operation, a, b) {
    return operation(a, b);
  }
  
  function addNumbers(x, y) {
    return x + y;
  }
  
  const resultAdd = calculate(addNumbers, 2, 3);
  console.log(resultAdd); // Output: 5
  
  // Function with a nested function
  function outerFunction() {
    console.log("Outer function!");
  
    function innerFunction() {
      console.log("Inner function!");
    }
  
    innerFunction();
  }
  
  outerFunction();
  // Output:
  // Outer function!
  // Inner function!