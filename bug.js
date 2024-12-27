function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  // Perform some operations
  return a + b;
}

console.log(foo(10, null)); // Output: null
console.log(foo(null, 20)); // Output: null
console.log(foo(undefined, 30)); // Output: NaN  // Unexpected behavior!