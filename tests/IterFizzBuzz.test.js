import { IterFizzBuzz } from "../index.js";

describe("IterFizzBuzz", () => {
  test("should instantiate with min and max", async () => {
    const iterFizzBuzz = new IterFizzBuzz(1, 16);
    expect(iterFizzBuzz).toBeInstanceOf(IterFizzBuzz);
  });

  test("should iterate over numbers from min to max", async () => {
    const iterFizzBuzz = new IterFizzBuzz(1, 16);
    const arr = [...iterFizzBuzz];
    expect(arr).toEqual([1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"]);
  });
});
