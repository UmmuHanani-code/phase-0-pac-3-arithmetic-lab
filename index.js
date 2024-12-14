function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      return Infinity; // Handle division by zero
    }
    return a / b;
  }

  function increment(n) {
    return n + 1;
  }

  function decrement(n) {
    return n - 1;
  }

  // Utility Functions:
  function makeInt(n) {
    return parseInt(n, 10); // Assumes base 10 for parsing
  }

  function preserveDecimal(n) {
    return parseFloat(n); // Converts string to floating-point number
  }