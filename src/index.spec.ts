import { FizzBuzz } from './index';

describe('Fizz Buzz', () => {
  let fizzBuzz: FizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  test('should print the number', () => {
    expect(fizzBuzz.print(1)).toEqual('1');
    expect(fizzBuzz.print(2)).toEqual('2');
  });
});
