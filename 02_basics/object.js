// =========================
// JAVASCRIPT OBJECT CHEAT SHEET
// =========================

// Create Object
const user = {
    name: "Ruchit",
    age: 20,
    city: "Surat"
};

// Access Properties
console.log(user.name);      // Dot notation
console.log(user["age"]);    // Bracket notation

// Add Property
user.email = "ruchit@gmail.com";

// Update Property
user.age = 21;

// Delete Property
delete user.city;

// Check Property Exists
console.log("name" in user);
console.log(user.hasOwnProperty("age"));

// Get All Keys
console.log(Object.keys(user));

// Get All Values
console.log(Object.values(user));

// Get Key-Value Pairs
console.log(Object.entries(user));

// Loop Through Object
for(let key in user){
    console.log(key, user[key]);
}

// Destructuring
const {name, age} = user;
console.log(name, age);

// Rename While Destructuring
const {name: username} = user;
console.log(username);

// Spread Operator (Copy Object)
const copy = {...user};

// Merge Objects
const obj1 = {a:1};
const obj2 = {b:2};

const merged = {...obj1, ...obj2};

// Object.assign()
const merged2 = Object.assign({}, obj1, obj2);

// Nested Object
const student = {
    name: "Ruchit",
    address: {
        city: "Surat",
        state: "Gujarat"
    }
};

console.log(student.address.city);

// Optional Chaining
console.log(student?.address?.city);

// Freeze Object
Object.freeze(user);

// Seal Object
Object.seal(user);

// Convert Object to JSON
const jsonData = JSON.stringify(user);

// Convert JSON to Object
const obj = JSON.parse(jsonData);

// Create Object from Entries
const newObj = Object.fromEntries([
    ["name", "Ruchit"],
    ["age", 20]
]);

console.log(newObj);

// =========================
// ARRAY OF OBJECTS
// =========================

const users = [
    {id:1, name:"Ruchit"},
    {id:2, name:"Rahul"},
    {id:3, name:"Meet"}
];

// Find
const user1 = users.find(u => u.id === 2);

// Find Index
const index = users.findIndex(u => u.id === 2);

// Filter
const filtered = users.filter(u => u.id > 1);

// Map
const names = users.map(u => u.name);

// Some
const hasRahul = users.some(u => u.name === "Rahul");

// Every
const allHaveId = users.every(u => u.id > 0);

console.log(user1);
console.log(index);
console.log(filtered);
console.log(names);
console.log(hasRahul);
console.log(allHaveId);

// =========================
// INTERVIEW NOTES
// =========================

/*
1. Object.keys(obj)
   -> Returns array of keys.

2. Object.values(obj)
   -> Returns array of values.

3. Object.entries(obj)
   -> Returns array of [key, value] pairs.

4. Object.assign({}, obj)
   -> Creates shallow copy.

5. Spread Operator (...)
   -> Most common way to copy and merge objects.

6. JSON.stringify(obj)
   -> Object -> JSON String.

7. JSON.parse(str)
   -> JSON String -> Object.

8. hasOwnProperty(key)
   -> Checks whether property exists in object.

9. "key" in obj
   -> Checks property in object and prototype chain.

10. Object.freeze(obj)
    -> Cannot add, delete, or modify properties.

11. Object.seal(obj)
    -> Can modify existing properties but
       cannot add/delete properties.

12. Optional Chaining (?.)
    -> Prevents error when nested property
       does not exist.

13. Destructuring
    -> Extract values from object easily.

14. Difference:
    
    Object.keys(obj)
    => ["name", "age"]

    Object.values(obj)
    => ["Ruchit", 20]

    Object.entries(obj)
    => [["name","Ruchit"],["age",20]]

15. Shallow Copy

    const copy = {...obj};

    Nested objects are still shared.

16. Deep Copy

    const deepCopy =
    JSON.parse(JSON.stringify(obj));

17. Most Asked Interview Methods

    Object.keys()
    Object.values()
    Object.entries()
    Object.assign()
    JSON.stringify()
    JSON.parse()
    hasOwnProperty()
    Spread Operator (...)
    Destructuring
    Optional Chaining

18. Array of Objects Methods

    find()
    findIndex()
    filter()
    map()
    some()
    every()

19. Difference

    find()
    -> Returns first matching object.

    filter()
    -> Returns all matching objects.

20. Difference

    for...in
    -> Used for Objects.

    for...of
    -> Used for Arrays, Strings, Maps, Sets.

*/