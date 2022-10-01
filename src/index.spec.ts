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

  test('multiple of 3 should print "Fizz"', () => {
    expect(fizzBuzz.print(3)).toEqual('Fizz');
    expect(fizzBuzz.print(6)).toEqual('Fizz');
  });
});
