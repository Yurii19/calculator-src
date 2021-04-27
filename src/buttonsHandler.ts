import { calculator } from "./calculator";

function getCoditions(display: string): string[] {
  const delimiters = /(?<=\d+)[/,x,\-,+]/g;
  const operators = display.match(delimiters);
  const operands = display.split(delimiters);
  if (operands.length <= 1) {
    return display;
  }
  let conditions: string[] = [];
  for (let i in operands) {
    let j = +i;
    conditions.push(operands[j]);
    if (operators[j]) {
      conditions.push(operators[j]);
    }
  }
  return conditions;
}

export const buttonsHandler = (
  buttonValue: string,
  currentValue: string
): string => {
  const delimiters = /[/,x,\-,+]/g;
  const paternPercent = /\d+[/,x,\-,+]\d+$/;
  if (/^\d$/.test(buttonValue) || /^[/,x,\-,+,.]$/.test(buttonValue)) {
    return currentValue + buttonValue;
  }
  if (buttonValue === "AC") return "";
  if (buttonValue === "=") {
    if (currentValue === "") return "";
    // if (!currentValue.match(paternPercent)) return currentValue;
    const conditions: string[] = getCoditions(currentValue);
    const res = calculator(conditions);
    return res.toString();
  }
  if (buttonValue === "%") {
    const lastOperation = currentValue.match(paternPercent);
    if (lastOperation) {
      const operands = lastOperation[0].split(delimiters);
      const newValue = (+operands[1] * +operands[0]) / 100;
      const res = currentValue.replace(/\d+$/, newValue.toString());
      return res;
    }
  }
  if (buttonValue === "+/-") {
    if (currentValue.match(/^-?\d+$/)) {
      const res = +currentValue * -1;
      return res.toString();
    } else {
      return currentValue;
    }
  }
  return "";
};
