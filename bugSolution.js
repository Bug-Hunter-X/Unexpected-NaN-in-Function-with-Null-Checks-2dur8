function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null and undefined values
  }

  // Perform some operations
  return a + b;
}

console.log(foo(10, null)); // Output: null
console.log(foo(null, 20)); // Output: null
console.log(foo(undefined, 30)); // Output: null // Corrected behavior!