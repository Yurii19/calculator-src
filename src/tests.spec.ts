import { calculator } from "./calculator";
import { testGenerator } from "./testGenerator";

describe("tests for calculator function", () => {
  it("2 + 11 should be 13", () => {
    const conditions = ["2", "+", "11"];
    const result = calculator(conditions);
    expect(result).toBe("13");
  });

  it("2 + 7 / 2 should be 7", () => {
    const conditions = ["2", "+", "7", "/", "2"];
    const result = calculator(conditions);
    expect(result).toBe("5.5");
  });

  it("2 + 3 * 2 should be 8", () => {
    const conditions = ["2", "+", "3", "x", "2"];
    const result = calculator(conditions);
    expect(result).toBe("8");
  });

  it("2 + 3 * 2 - 4 / 2 + 10 should be 16", () => {
    const conditions = ["2", "+", "3", "x", "2", "-", "4", "/", "2", "+", "10"];
    const result = calculator(conditions);
    expect(result).toBe("16");
  });

  // it("test generator", () => {
  //   const result = testGenerator(7);
  //   expect(result).toBe(6);
  // });
});
