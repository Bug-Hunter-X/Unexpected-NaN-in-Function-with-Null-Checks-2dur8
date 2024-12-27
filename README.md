# Unexpected NaN in JavaScript Function with Null Checks

This repository demonstrates a subtle bug in JavaScript function handling of null and undefined values.  The `foo` function intends to gracefully handle null inputs, returning null in such cases. However, if undefined is passed, it results in NaN instead of a more predictable behavior (e.g., throwing an error or returning a default value).

The bug.js file shows the erroneous behavior.  The bugSolution.js file provides a corrected version.