// =============== IF STATEMENT ===============
/*
    if(condition){
        code block
    }
*/

const age: number = 20;

if (age >= 17) {
  console.log("Anda bisa buat KTP");
}

// =============== ELSE STATEMENT ===============
// backup plan dari if statement

const age2: number = 11;

if (age2 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

// =============== ELSE IF STATEMENT ===============
// untuk kondisi yang lebih banyak

const grade: string = "B";

if (grade === "A") {
  console.log("Nilai bagus");
} else if (grade === "B") {
  console.log("Nilai lumayan");
} else if (grade === "C") {
  console.log("Nilai buruk");
} else {
  console.log("Nilai tidak diketahui");
}

// =============== SWITCH CASE ===============
/*
    switch(value) {
        case value1:
            result
            break;
        case value2:
            result
            break;
        default:
            result
            break;
    }
*/

const day: string = 'kamis';

switch (day) {
    case 'senin':
        console.log('hari senin');
        break;
    case 'selasa':
        console.log('hari selasa');
        break;
    case 'rabu':
        console.log('hari rabu');
        break;
    default:
        console.log('hari tidak ditemukan');
        break;
}

// =============== LOIGCAL OPERATOR ===============
/* 
    && -> AND
    || -> OR
    ! -> NOT
*/

// AND -> kedua valuenya harus bernilai true agar hasilnya true
const umur: number = 17;
const punyaSIM: boolean = true;

if (umur >= 17 && punyaSIM) {
    console.log('boleh bawa kendaraan');
} else {
    console.log('belum boleh bawa kendaraan');
}

// OR -> cukup salah satu value yg bernilai true, hasilnya akan true

const car: string = 'mercy';

if (car === 'bmw' || car === 'mercy') {
    console.log('kendaraan eropa');
} else {
    console.log('kendaraan jepang');
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// =============== TERNARY OPERATOR ===============
// shortcut untuk penulisan if else condition
/*
    condition ? true : false
*/

const str: string = 'chatgpt';

if (str === 'chatgpt') {
    console.log('chatgpt');
} else {
    console.log('not chatgpt');
}

console.log(str === 'chatgpt' ? 'chatgpt' : 'not chatgpt');

// condition ? true : condition ? true : condition ? true : false

console.log(str === 'chatgpt' ? 'chatgpt' : str === 'claude' ? 'claude' : 'not found');

// =============== LOOP STATEMENT (perulangan) ===============
// rangkaian instruksi yg dilakukan berulangkali hingga kondisinya tidak terpenuhi

// type : for loop, while loop, do...while loop

/*
    FOR LOOP -> punya 3 statement
    statement 1 : inisiasi variable dari looping itu sendiri
    statement 2 : define kondisi dari looping tsb
    statement 3 : kode yg di execute diakhir setiap iterasi
*/

/*
    for(statement1; statement2; statement 3) {
        code block yg akan diulang
    }
*/

for (let i = 0; i < 8; i++) {
    console.log('SYUDUDU');
}

// =============== WHILE LOOP ===============
/*
    while(condition) {
        code block yg akan diulang
    }
*/

let i: number = 0;

while (i < 7) {
    console.log('SYUDUDU');
    i++;
}

// DO...WHILE LOOP
/*
    do {
        code block yg akan diulang
    } while (condition);
*/

let count: number = 1;

do {
    console.log('employee ' + count);
    count++;
} while(count <=5);

// =============== BREAK ===============
// untuk menghentikan loop

let sum: number = 0;

while(true) {
    console.log(sum);

    if (sum >= 5) {
        break;
    }
    sum++;
}

// =============== CONTINUE ===============
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

