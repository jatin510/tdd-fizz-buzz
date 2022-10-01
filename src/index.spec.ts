import { FizzBuzz } from './index';

describe('Fizz Buzz', () => {
  let fizzBuzz: FizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  test('when the number is not in range of 1-100 throw RangeError', () => {
    const inputNumber = (num: number) => {
      fizzBuzz.print(num);
    };

    expect(() => inputNumber(-1)).toThrow(RangeError);
    expect(() => inputNumber(0)).toThrow(RangeError);
    expect(() => inputNumber(101)).toThrow(RangeError);
  });

  test('should print the number', () => {
    expect(fizzBuzz.print(1)).toEqual('1');
    expect(fizzBuzz.print(2)).toEqual('2');
  });

  test('multiple of 3 should print "Fizz"', () => {
    expect(fizzBuzz.print(3)).toEqual('Fizz');
    expect(fizzBuzz.print(6)).toEqual('Fizz');
  });

  test('multiple of 5 should print "Buzz"', () => {
    expect(fizzBuzz.print(5)).toEqual('Buzz');
    expect(fizzBuzz.print(10)).toEqual('Buzz');
  });

  test('if number is multiple of 3 and 5 both, print "FIzzBuzz"', () => {
    expect(fizzBuzz.print(15)).toEqual('FizzBuzz');
    expect(fizzBuzz.print(30)).toEqual('FizzBuzz');
  });
});
