// versi JS
const message = "Hello";

// versi TS
const message2: string = "Hello";

console.log(message);
console.log(message2);

// windows, mac: ctrl + K + Q, cmd + K + Q

// ============== STRING BUILT-IN METHODS ===============
const name: string = "ArAga Setumbra";
const name2: string = "Nadia";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("A", "O"));
console.log(name.replaceAll("A", "O"));
console.log(name.concat(" ").concat(name2));
console.log(name.slice(0, 3));
console.log(name.slice(1, 4));
console.log(name.split(""));
console.log(name.split(" "));

// ============== TEMPLATE LITERALS / TEMPLATE STRING ===============
const welcome: string = "Welcome";
const name3: string = "Arga";

console.log(welcome + " Sir " + name3);
console.log(`${welcome} Sir ${name3}`);

// ============== NUMBER BUILT-IN METHODS ===============

const angka: string = "4000";

console.log(Number(angka));
console.log(parseInt(angka));

// ============== STRING CONVERSION ===============

const angka2: number = 200;

console.log(String(angka2));
console.log(angka2.toString());

// ============== BOOLEAN CONVERSION ===============

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean("arga"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

// ============== DATE ===============
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// ============== BASIC OPERATOR ===============
/*
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulus (sisa bagi)
    ** -> pangkat
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(4 * 2);
console.log(8 / 2);
console.log(9 % 4);
console.log(3 ** 2);

// ============== MODIFY IN PLACE ===============

let n: number = 10;

n +=5; // n = n + 5;

console.log(n);

// ============== MODIFY IN PLACE ===============
let counter: number = 1;

counter++; // increment
console.log(counter);

counter--; // decrement
console.log(counter);

// ============== COMPARISON OPERATOR ===============
/* 
    == -> equal to (tidak membandingkan tipe data)
    === -> strict equal to (membandingkan tipe data)
    != -> not equal to (tidak membandingkan tipe data)
    !== -> strict not equal to (membandingkan tipe data)
    > -> greater than (lebih besar dari)
    < -> less than (lebih kecil dari)
    >= -> greater than or equal to (lebih besar dari atau sama dengan)
    <= -> less than or equal to (lebih kecil dari atau sama dengan)
*/

// console.log(2 == "2"); // pengecekan di valuenya saja
// console.log(2 === "2"); // pengecekan di value dan tipe data
console.log(2 < 5);
console.log(5 > 2);
console.log(5 > 5);
console.log(5 <= 5);
console.log(5 >= 5);

// ============== MATH ===============
// Math ceil -> pembulatan angka ke atas
console.log(Math.ceil(4.2));

// Math floor -> pembulatan angka ke bawah
console.log(Math.floor(4.7));

// Math round -> pembulatan angka ke bilangan bulat terdekat
console.log(Math.round(4.2));
console.log(Math.round(4.7));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 5, 3, 9, 2));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1, 5, 3, 9, 2));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-5));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());

// angka random antara 1 dan 100
console.log(Math.floor(Math.random() * 100) + 1);

// Math.floor(Math.random() * (max - min + 1)) + min
const min: number = 12
const max: number = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


