// Complete the class, IterFizzBuzz, that implements the iterable interface.
//
// The constructor should take in two arguments, min and max, which are both integers. It
// should allow users to iterate over the numbers from min (inclusive) to max (exclusive).
// For each number, the iterator should return "fizz" if the number is divisible by 3,
// "buzz" if the number is divisible by 5, "fizzbuzz" if the number is divisible by 15, or
// the number itself otherwise.
//
// Ex.:
//   const arr = [...new IterFizzBuzz(1, 16)];
//   arr => [1, 2, 'fizz', 4, 'buzz', ..., 14, 'fizzbuzz']
export default class IterFizzBuzz {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  *[Symbol.iterator]() {
    for (let i = this.min; i < this.max; i++) {
      if (i % 15 === 0) {
        yield "fizzbuzz";
      }
      else if (i % 3 === 0) {
        yield "fizz";
      }
      else if (i % 5 === 0) {
        yield "buzz";
      }
      else {
        yield i;
      }
    }
  }
}
