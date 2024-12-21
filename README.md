# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: Type 'string' is not assignable to type 'number'.  The error arises when a function expecting a number receives a string instead.  The solution involves type checking and potentially converting string inputs to numbers.

## Bug

The `bug.ts` file contains a simple calculator with functions for addition, subtraction, multiplication, and division. The bug occurs when providing strings instead of numbers as arguments to the functions.  The TypeScript compiler will throw an error because these functions are strictly typed to accept only numbers.

## Solution

The `bugSolution.ts` file addresses this by adding explicit type checking and using `parseInt` to convert string inputs to numbers before performing calculations.  This prevents type errors and provides better error handling.