export class FizzBuzz {
  print(num: number): string {
    let str = '';

    if (num % 3 === 0) str += 'Fizz';
    if (num % 5 === 0) str += 'Buzz';
    if (str.length === 0) str += num.toString();

    return str;
  }
}
