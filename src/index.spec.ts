import { FizzBuzz } from './index';

describe('Fizz Buzz', () => {
  test('should print the number', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.print(1)).toEqual('1');
  });
});
