function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function performCalculation(operation: string, a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Please provide numbers.');
  }

  switch (operation) {
    case 'add':
      return add(numA, numB);
    case 'subtract':
      return subtract(numA, numB);
    case 'multiply':
      return multiply(numA, numB);
    case 'divide':
      return divide(numA, numB);
    default:
      throw new Error('Invalid operation');
  }
}

const calculator = {
  add,
  subtract,
  multiply,
  divide,
  performCalculation
};

export default calculator;