function getRandom(min: number, max: number, isFloat?: boolean) {
  min = isFloat ? min : Math.ceil(min);
  max = isFloat ? max : Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export function testGenerator(
  length: number,
  useFloat?: boolean,
  useNegative?: boolean
): string[] {
  const operators = ["+", "-", "*", "/"];

  const result = [];

  for (let i = 0; i < length - 1; i++) {
    const digit = getRandom(0, 9, useFloat) * (useNegative ? -1 : 1);
    const operator = operators[getRandom(0, operators.length - 1)];
    result.push(String(digit));
    result.push(String(operator));
  }
  const lastDigit = getRandom(0, 9, useFloat) * (useNegative ? -1 : 1);
  result.push(String(lastDigit));
  return result;
}
