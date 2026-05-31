// =========================
// JAVASCRIPT FUNCTIONS CHEAT SHEET
// =========================

// Function Declaration
function greet() {
    console.log("Hello World");
}
greet();

// Function with Parameters
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 4));

// Arrow Function
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 5));

// Short Arrow Function
const square = n => n * n;
console.log(square(5));

// Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello ${name}`);
}
greetUser();
greetUser("Ruchit");

// Rest Parameters
function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Callback Function
function processUser(callback) {
    callback();
}

processUser(() => {
    console.log("Callback Executed");
});

// Higher Order Function
function operation(a, b, fn) {
    return fn(a, b);
}

console.log(operation(10, 20, add));

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE Executed");
})();

// Anonymous Function
setTimeout(function() {
    console.log("Anonymous Function");
}, 1000);

// Recursive Function
function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Nested Function
function outer() {
    function inner() {
        console.log("Inner Function");
    }
    inner();
}
outer();

// Closure Example
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());

// Function Returning Function
function greeting(msg) {
    return function(name) {
        console.log(`${msg} ${name}`);
    };
}

const sayHello = greeting("Hello");
sayHello("Ruchit");

// Generator Function
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());

// Async Function
async function fetchData() {
    return "Data Received";
}

fetchData().then(res => console.log(res));

// =========================
// INTERVIEW NOTES
// =========================

/*
1. Function Declaration

   function test(){}

   Hoisted completely.
   Can call before definition.

------------------------------------------------

2. Function Expression

   const test = function(){}

   Not fully hoisted.
   Cannot call before definition.

------------------------------------------------

3. Arrow Function

   const test = () => {}

   Short syntax.
   No own 'this'.
   Mostly used in React.

------------------------------------------------

4. Difference

   Regular Function
   -> Has its own this.

   Arrow Function
   -> Uses parent's this.

------------------------------------------------

5. Default Parameter

   function greet(name="Guest")

   Used when no argument is passed.

------------------------------------------------

6. Rest Parameter

   function sum(...nums)

   Collects multiple values into array.

------------------------------------------------

7. Spread vs Rest

   Spread (...)
   -> Expands array/object.

   Rest (...)
   -> Collects values.

------------------------------------------------

8. Callback Function

   Function passed as argument
   to another function.

------------------------------------------------

9. Higher Order Function

   Function that:
   - Takes function as argument
   OR
   - Returns a function

------------------------------------------------

10. Closure (Very Important)

   Inner function remembers
   variables of outer function
   even after outer function ends.

   Frequently Asked.

------------------------------------------------

11. IIFE

   (function(){
   })();

   Runs immediately.

------------------------------------------------

12. Recursion

   Function calling itself.

   Examples:
   factorial
   tree traversal
   DFS

------------------------------------------------

13. Generator Function

   function* test(){}

   Uses yield.

   Produces values one by one.

------------------------------------------------

14. Async Function

   async function test(){}

   Always returns Promise.

------------------------------------------------

15. Hoisting

   Function Declaration
   -> Hoisted

   Function Expression
   -> Not fully hoisted

   Arrow Function
   -> Not fully hoisted

------------------------------------------------

16. Most Asked Interview Topics

   ✔ Function Declaration
   ✔ Function Expression
   ✔ Arrow Function
   ✔ Closure
   ✔ Callback
   ✔ Higher Order Function
   ✔ Recursion
   ✔ Hoisting
   ✔ Async/Await
   ✔ this keyword
   ✔ IIFE

------------------------------------------------

17. Interview Question

   Q: Difference between

   function test(){}

   and

   const test = () => {}

   Answer:
   - Function Declaration is hoisted.
   - Arrow Function is not.
   - Arrow Function has no own this.
   - Arrow Function syntax is shorter.

------------------------------------------------

18. JavaScript Functions Used Daily

   map()
   filter()
   reduce()
   find()
   forEach()
   setTimeout()
   setInterval()
   async/await
   callback functions

------------------------------------------------

19. Function Types

   Function Declaration
   Function Expression
   Arrow Function
   Anonymous Function
   Callback Function
   Higher Order Function
   Recursive Function
   Generator Function
   Async Function
   IIFE

------------------------------------------------

20. Must Know for Interviews

   Closure
   Hoisting
   this
   Arrow Functions
   Callback
   Promise
   Async/Await

*/