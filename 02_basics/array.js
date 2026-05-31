// Creating Arrays
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3);

// Access Elements
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Add Elements
arr.push(6);       // End
arr.unshift(0);    // Beginning

// Remove Elements
arr.pop();         // End
arr.shift();       // Beginning

// Insert/Delete at Specific Position
arr.splice(2, 1);          // Remove 1 element from index 2
arr.splice(2, 0, 100);     // Insert 100 at index 2

// Copy Part of Array
let part = arr.slice(1, 4);

// Merge Arrays
let merged = arr.concat([7, 8, 9]);

// Spread Operator
let newArr = [...arr, 10, 11];

// Length
console.log(arr.length);

// Find Element
console.log(arr.includes(3));
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));

// Find Object
let users = [
    {id: 1, name: "Ruchit"},
    {id: 2, name: "Rahul"}
];

let user = users.find(u => u.id === 2);
console.log(user);

// Find Index
let idx = users.findIndex(u => u.id === 2);

// Filter
let even = arr.filter(x => x % 2 === 0);

// Map
let square = arr.map(x => x * x);

// Reduce
let sum = arr.reduce((a, b) => a + b, 0);

// Some
console.log(arr.some(x => x > 3));

// Every
console.log(arr.every(x => x > 0));

// ForEach
arr.forEach(x => console.log(x));

// Loop
for(let x of arr){
    console.log(x);
}

// Sort
arr.sort((a, b) => a - b);

// Reverse
arr.reverse();

// Join
let str = arr.join("-");

// Convert String to Array
let chars = "hello".split("");

// Fill
let a = new Array(5).fill(0);

// Array.from()
let nums = Array.from("12345");

// Flat
let nested = [1,[2,[3,4]]];
console.log(nested.flat(2));

// FlatMap
let result = [1,2,3].flatMap(x => [x, x*2]);

// Destructuring
let [first, second] = arr;

// Check Array
console.log(Array.isArray(arr));

// Keys
console.log([...arr.keys()]);

// Values
console.log([...arr.values()]);

// Entries
console.log([...arr.entries()]);

// At
console.log(arr.at(-1));

// Copy Within
arr.copyWithin(0, 3);

// To String
console.log(arr.toString());

// Remove Duplicates
let unique = [...new Set([1,2,2,3,3,4])];

// Convert Array to Set
let s = new Set(arr);

// Convert Set to Array
let arrayAgain = [...s];