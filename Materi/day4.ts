// =============== ARRAY ===============

const arr = []; // cara 1
const arr2 = new Array(); // cara 2

const arrayOfString: string[] = ["A", "B", "C", "D"];
console.log(arrayOfString[0]);

const arrOfNumber: number[] = [100, 200, 300, 400];
console.log(arrOfNumber[2]);

interface Student {
  hobby?: string;
  name: string;
  age: number;
}

// type Student = {
//     hobby: string;
//     name: string;
//     age: number;
// }

const siswa: Student = {
  name: "Arga",
  age: 30,
};

console.log(siswa.name);
console.log(siswa["hobby"]);

// array of object
const students = [
  { name: "Nadia", age: 26 },
  { name: "Satria", age: 32 },
  { name: "Rafi", age: 22 },
];

console.log(students[1].age);
console.log(students[2]["name"]);

// =============== FOR OF ===============

const fruits: string[] = ["apple", "banana", "orange", "mango"];
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// =============== FUNCTION ===============

// function declaration
/*
    function namaFunc(){
    logic
    };
*/

function sayHello() {
  console.log("Hello World");
}

sayHello();

// function expression
/*
    const namaFunc = function (){
    logic
    }
*/

const sayHello2 = function () {
  console.log("Hello World");
};

sayHello2();

// =============== FUNCTION SCOPE ===============
// variable yg di define di dalam function, hanya bisa diakses didalam func tsb
function greeting() {
  const hello: string = "hello";

  console.log(hello);

  return hello;
}

console.log(greeting());
console.log(greeting());

// =============== PARAMETER & ARGUMENT ===============
// parameter -> variable yg mewakili vlaue dari argument yg di masukan
// argument -> value yg dimasukkan saat pemanggilan function

function greeting2(name: string, company?: string) {
  const welcome: string = "Welcome";

  if (company) {
    return `${welcome}, ${name} from ${company}`;
  } else {
    return `${welcome}, ${name}`;
  }
}

console.log(greeting2("Arga", "Grab"));
console.log(greeting2("Nadia", "Gojek"));
console.log(greeting2("Satria"));

// =============== DEFAULT PARAMETER ===============
function multiply(a: number, b: number = 10) {
  console.log(a);
  console.log(b);

  return a * b;
}

console.log(multiply(3, 5));
console.log(multiply(3));

// =============== REST PARAMETER ===============
// mewakili sisa argument ke dalam 1 parameter

function myFunc(a: number, b: number, ...c: number[]) {
  console.log(a);
  console.log(b);
  console.log(c);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// =============== NESTED PARAMETER ===============
// fungsi yg berada di dalam fungsi
// inner function -> bisa mengakses parameter dari outer function
// outer function -> tidak bisa mengakses parameter dari inner function

// outer func
function getMessage(firstName: string) {
  // inner func
  function sayHello() {
    return `Hello ${firstName}, `;
  }

  // inner func
  function welcome() {
    return `Welcome to Purwadhika`;
  }
  return sayHello() + welcome();
}

console.log(getMessage("Arga"));

// =============== RECURSIVE ===============
// fungsi yg memanggil dirinya sendiri

function countdown(angka: number) {
  console.log(angka);

  let nextNumber = angka - 1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(10);

// =============== ARROW FUNCTION ===============
// shortcut untuk menuliskan function expression
/* 
    const namaFunc = () => {}
*/

// func expression
const square = function (angka: number) {
  return angka * angka;
};

// arrow func
const square2 = (angka: number) => {
  return angka * angka;
};

// jika hanya 1 line bisa disingkat
const square3 = (angka: number) => angka * angka;

// =============== ARRAY BUILT IN METHOD ===============
// JOIN -> menggabungkan value yg ada dalam array ke bentuk string
const words: string[] = ["nadia", "raja", "hutan"];
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["nadia", "raja", "hutan"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["nadia", "raja", "hutan"];
console.log(words3);
words3.shift();
console.log(words3);

// UNSHIFT -> menambahkan value ke urutan paling depan dalam array
const words4: string[] = ["arga", "orang", "kaya"];
console.log(words4);
words4.unshift("boss");
console.log(words4);

// PUSH -> menambahkan value ke urutan paling belakang dalam array
const words5: string[] = ["arga", "orang", "kaya"];
console.log(words5);
words5.push("dunia");
console.log(words5);

// SPLICE -> menambahkan, menghapuskan atau mengganti value pada array
// syntax -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "mar", "apr", "jun"];

// menambahkan data
months.splice(1, 0, "feb");
console.log(months);

// menghapuskan data
months.splice(4, 1);
console.log(months);

// mengganti data
months.splice(3, 1, "may");
console.log(months);

// SORT -> mengurutkan isi array berupa string / number
const fruits2: string[] = ["banana", "apple", "mango", "orange"];
fruits2.sort();
console.log(fruits2);
console.log(fruits2.reverse());

const numbers: number[] = [4, 3, 5, 8, 11];
numbers.sort((a, b) => a - b); // ascending
// numbers.sort((a, b) => b - a); // descending
console.log(numbers);

// INCLUDES -> mengecek value pada array, ada atau tidak, hasilnya boolean
const fruits3: string[] = ["banana", "apple", "mango", "orange"];
console.log(fruits3.includes('apple'));
console.log(fruits3.includes('grape'));

