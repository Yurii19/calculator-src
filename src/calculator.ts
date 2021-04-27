function reducer(i: number, src: string[], value: number): void {
  src[i] = value.toString();
  src[i - 1] = "";
  src[i + 1] = "";
}

function addititon(src: string[]): string[] {
  if (!src.includes("+")) {
    return src;
  } else {
    let i = src.indexOf("+");
    let newSrc: string[] = [];
    const prev: number = +src[i - 1];
    const next: number = +src[i + 1];
    let res: number = prev + next;
    let tempArr = [...src];
    reducer(i, tempArr, res);
    newSrc = tempArr.filter((el) => el !== "");
    return addititon(newSrc);
  }
}

function subtraction(src: string[]): string[] {
  if (!src.includes("-")) {
    return src;
  } else {
    let i = src.indexOf("-");
    let newSrc: string[] = [];
    const prev: number = +src[i - 1];
    const next: number = +src[i + 1];
    let res: number = prev - next;
    let tempArr = [...src];
    reducer(i, tempArr, res);
    newSrc = tempArr.filter((el) => el !== "");
    return subtraction(newSrc);
  }
}
function multiplication(src: string[]): string[] {
  if (!src.includes("x")) {
    return src;
  } else {
    let i = src.indexOf("x");
    let newSrc: string[] = [];
    const prev: number = +src[i - 1];
    const next: number = +src[i + 1];
    let res: number = prev * next;
    let tempArr = [...src];
    reducer(i, tempArr, res);
    newSrc = tempArr.filter((el) => el !== "");
    return multiplication(newSrc);
  }
}

function division(src: string[]): string[] {
  if (!src.includes("/")) {
    return src;
  } else {
    let i = src.indexOf("/");
    let newSrc: string[] = [];
    const prev: number = +src[i - 1];
    const next: number = +src[i + 1];
    let res: number = prev / next;
    let tempArr = [...src];
    reducer(i, tempArr, res);
    newSrc = tempArr.filter((el) => el !== "");
    return division(newSrc);
  }
}

export function calculator(conditions: string[]): string {
  let temp: string[] = ["init"];
  temp = division(conditions);
  temp = multiplication(temp);
  temp = subtraction(temp);
  temp = addititon(temp);
  return temp[0];
}
