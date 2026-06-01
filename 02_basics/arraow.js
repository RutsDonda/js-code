// =========================
// THIS KEYWORD
// =========================

// 1. Global Scope

console.log(this);

// Browser => window object
// Node.js => {} (empty object)

// =========================
// 2. Inside Object Method
// =========================

const user = {
    name: "Ruchit",

    greet() {
        console.log(this.name);
    }
};

user.greet(); // Ruchit

// Here 'this' refers to the object
// that called the method.

// =========================
// 3. Regular Function
// =========================

function show() {
    console.log(this);
}

show();

// Browser => window
// Strict Mode => undefined

// =========================
// 4. Inside Nested Function
// =========================

const obj = {
    name: "Ruchit",

    greet() {
        function inner() {
            console.log(this);
        }

        inner();
    }
};

obj.greet();

// this is NOT obj
// because inner() is called as normal function

// =========================
// 5. Fix Using Arrow Function
// =========================

const obj2 = {
    name: "Ruchit",

    greet() {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

obj2.greet();

// Output: Ruchit

// Arrow function takes this
// from parent scope

// =========================
// ARROW FUNCTION
// =========================

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// =========================
// Short Form
// =========================

const square = n => n * n;

console.log(square(5));

// =========================
// Multiple Parameters
// =========================

const multiply = (a, b) => a * b;

console.log(multiply(2, 3));

// =========================
// Returning Object
// =========================

const createUser = () => ({
    name: "Ruchit",
    age: 20
});

console.log(createUser());

// =========================
// Arrow Function in Array
// =========================

const nums = [1, 2, 3, 4];

const result = nums.map(num => num * 2);

console.log(result);

// =========================
// Arrow Function has NO this
// =========================

const person = {
    name: "Ruchit",

    regularFunction: function() {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};

person.regularFunction(); // Ruchit
person.arrowFunction();   // undefined

// Arrow function does not have
// its own this

// =========================
// Arrow Function has NO arguments
// =========================

const test = () => {
    // console.log(arguments);
};

// Error

// =========================
// Arrow Function cannot be used
// as Constructor
// =========================

const User = () => {};

new User(); // Error

// Arrow functions cannot be used
// with new keyword