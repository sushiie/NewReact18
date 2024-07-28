import { Sum } from "../sum";

test("Should return the sum of two numbers from sum function", () => {
  const result = Sum(5, 9);
  expect(result).toBe(14);
});
