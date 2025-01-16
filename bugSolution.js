function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Error: Operands must be numbers";
  }
}
console.log(foo(10, 20)); // Output: 30
console.log(foo(10, "20")); // Output: Error: Operands must be numbers
console.log(foo(10, [20])); // Output: Error: Operands must be numbers