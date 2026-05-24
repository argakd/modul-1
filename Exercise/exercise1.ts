// No 1
// Write code to find area of rectangle.
const length1: number = 5;
const width1: number = 3;
const area: number = length1 * width1;

console.log(area);

// No 2
// Write code to find perimeter of rectangle.
const length2: number = 5;
const width2: number = 3;

const perimeter: number = 2 * (length2 + width2);

console.log(perimeter);

// No 3
// Write a code to find diameter, circumference, and area of a circle.
const radius: number = 5;
const diameter: number = 2 * radius;
const circumference: number = 2 * Math.PI * radius;
const area2: number = Math.PI * radius ** 2;

console.log(diameter);
console.log(circumference);
console.log(area2);

// No 4
// Write a code to find angles of triangle if two angles are given.
const a: number = 80;
const b: number = 65;
const c: number = 180 - a - b;

console.log(c);

// No 5
/* 
    Write a code to convert days to years, months, and days. 
    (1 day = 365 years, 1 months = 30 days)
*/

const totalDays: number = 400;
const years = Math.floor(totalDays / 365);
const remainingDaysAfterYears = totalDays % 365;
const months = Math.floor(remainingDaysAfterYears / 30);
const days = remainingDaysAfterYears % 30;

console.log(`${years} years, ${months} months, and ${days} days.`);

const totalDays2: number = 366;
const years2 = Math.floor(totalDays2 / 365);
const remainingDaysAfterYears2 = totalDays2 % 365;
const months2 = Math.floor(remainingDaysAfterYears2 / 30);
const days2 = remainingDaysAfterYears2 % 30;

console.log(`${years2} years, ${months2} months, and ${days2} days.`);

// No 6
// Write a code to get difference between dates in days    
const date1 = new Date ('2022-01-20')
const date2 = new Date ('2022-01-22')
const diffInMs = Math.abs(date2.getTime() - date1.getTime());
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

console.log(diffInDays);