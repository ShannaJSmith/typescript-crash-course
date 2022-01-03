"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Shanna', true]; //expects the types in this order
// Tuple Array
let employee;
employee = [
    [1, 'Shanna'],
    [2, 'Jin'],
    [3, 'Haruka'],
];
// Union
let pid;
pid = '22';
// Enum
//numeric values by default starting from 0. Can change by assiging values
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: 'Sanada',
};
// Type Assertion
let cid = 1;
// two ways:
//let customerId = <number>cid.  // 1
let customerId = cid; // 2
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 2));
// Void
function log(message) {
    console.log(message);
}
log('hi');
const user1 = {
    id: 1,
    name: 'Yukimura',
};
// interface Point = number | string // can't do this
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const mari = new Person(1, 'Mari Bon');
const abi = new Person(2, 'Abi San');
// console.log(mari.register())
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Sango', 'Developer');
// console.log(emp.register())
// Generics 
// replace 'any' with 'T'. It's a placeholder of the type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['mari', 'jin', 'sango']);
// numArray.push('hello')
// strArray.push(1)
