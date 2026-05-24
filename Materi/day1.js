console.log("Hello World!");

// ini adalah commment 1

/*
ini
adalah
comment 2
*/

// =============== VARIABLE =`==============
//  storage/penampungan data
// var, let, const

var person = "Arga";
console.log(person);

let person2 = "Nadia";
person2 = "Setumbra";
console.log(person2);

const person3 = "Cong";
// person3 = 'Ewong'; // ini gak bisa
console.log(person3);

// ============== VARIABLE NAMING ===============
/*
    - must only contain letters, numbers, or symbol "$" and "_"
    - first character must not be a number
    - case sensitive
*/

const companyName = "Purwadhika"; // camel case, best practice JavaScript/TypeScript
const CompanyName = "Purwadhika"; // pascal case
const company_name = "Purwadhika"; // snake case

// ============== DATA TYPES ===============
// Primitive data types = string, number, boolean, null dan undefined
// Non-primitive data types = object dan array

// string -> "", '', ``
console.log("Hello");
console.log("Hello");
console.log(`Hello`);

// number -> 1 2 5 10 25 100
console.log(1);
console.log(10);
console.log(100);
console.log(1.5);
console.log(-1.5);

//boolean -> true dan false
console.log(true);
console.log(false);

// null -> menanandakan sebuah value itu masih kosong dan belum terisi
let orang = null;

// undefined -> js tidak tahu isinya
let orang2 = undefined;
