const mathOperations = require("./calc");

describe("Calculator Tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
});

describe("Calculator Tests", () => {
  test("diff 5 - 2 should return 3", () => {
    expect(mathOperations.diff(5, 2)).toBe(3);
  });
});

describe("Calculator Tests", () => {
  test("adding 5 + 2 should return 7", () => {
    expect(mathOperations.sum(5, 2)).toBe(7);
  });
});

describe("Calculator Tests", () => {
  test("diff 1 - 2 should return -1", () => {
    expect(mathOperations.diff(1, 2)).toBe(-1);
  });
});
