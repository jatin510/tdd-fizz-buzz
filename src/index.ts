export class FizzBuzz {
  print(num: number): string {
    if (num < 1 || num > 100) {
      throw new RangeError('Input number not in range of 1-100');
    }

    let str = '';

    if (num % 3 === 0) str += 'Fizz';
    if (num % 5 === 0) str += 'Buzz';
    if (str.length === 0) str += num.toString();

    return str;
  }
}
