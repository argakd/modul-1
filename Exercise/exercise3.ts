// No. 1
/*
    Write a code to check whether the number is odd or even
    Ex: 25 -> odd number, 2 -> even number
*/

const angka: number = 25;
const angka2: number = 2;

if (angka % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

if (angka2 % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

console.log(angka % 2 === 0 ? "even" : "odd");
console.log(angka2 % 2 === 0 ? "even" : "odd");

// No. 2
/*
    Write a code to check whether the number is prime number or not
    Ex: 7 -> 7 is a prime number, 6 -> 6 is not a prime number
*/

const num: number = 7;
const num2: number = 6;
let isPrime: boolean = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime);

if (num2 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num2; i++) {
    if (num2 % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime);

// No. 3
/*
    Write a code to find the sum of the numbers 1 to N
    Ex: 5 -> 1 + 2 + 3 + 4 + 5 = 15
    Ex: 3 -> 1 + 2 + 3 = 6
*/

const angka3: number = 5;
let sum: number = 0;
let message: string = " ";

for (let i = 1; i <= angka3; i++) {
  sum += i;

  if (i === angka3) {
    message += i + "";
  } else {
    message += i + " + ";
  }
}
console.log(message + " = " + sum);

const angka4: number = 3;
let sum2: number = 0;
let message2: string = " ";

for (let i = 1; i <= angka4; i++) {
  sum2 += i;

  if (i === angka4) {
    message2 += i + "";
  } else {
    message2 += i + " + ";
  }
}
console.log(message2 + " = " + sum2);

// No. 4
/*
    Write a code to find factorial of a number
    Ex: 4! -> 4 x 3 x 2 x 1 = 24
    Ex: 6! -> 6 x 5 x 4 x 3 x 2 x 1 = 720
*/

const num3: number = 4;
let sum3: number = 1;
let message3: string = "";

for (let i = num3; i >= 1; i--) {
  sum3 *= i;

  if (i === 1) {
    message3 += i + "";
  } else {
    message3 += i + " x ";
  }
}
console.log(message3 + ' = ' + sum3);

const num4: number = 6;
let sum4: number = 1;
let message4: string = "";

for (let i = num4; i >= 1; i--) {
  sum4 *= i;

  if (i === 1) {
    message4 += i + "";
  } else {
    message4 += i + " x ";
  }
}
console.log(message4 + ' = ' + sum4);

// No. 5
/*
    Write a code to print the first N fibonacci numbers
    Ex: 15 -> 610
*/

const n: number = 15;
let a: number = 0;
let b: number = 1;

for(let i = 0; i < n; i++) {
    let next: number = a + b;

    a = b;
    b = next;
}

console.log(a);