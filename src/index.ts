// Basic Types
let id: number = 5

let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'hello']

// Tuple

let person: [number, string, boolean] = [1, 'Shanna', true] //expects the types in this order

// Tuple Array
let employee: [number, string] []

employee = [
  [1, 'Shanna'],
  [2, 'Jin'],
  [3, 'Haruka'],
]

// Union
let pid: string | number 

pid = '22'

// Enum

//numeric values by default starting from 0. Can change by assiging values
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction1.Up)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction2.Down)

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1, 
  name: 'Sanada',
}

// Type Assertion
let cid: any = 1
// two ways:
//let customerId = <number>cid.  // 1

let customerId = cid as number // 2

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

console.log(addNum(5, 2))

// Void
function log(message: string | number): void {
  console.log(message)
}

log('hi')

// Interfaces

interface UserInterface {
  readonly id: number,
  name: string
  age?: number   //'?' makes it optional
}

const user1: UserInterface = {
  id: 1, 
  name: 'Yukimura',
}

type Point = number | string // set to a union
// interface Point = number | string // can't do this
const p1: Point = 1

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
// public by default. Options are public, private, protected
  id: number 
  name: string

  constructor(id: number, name: string) {   // <- method. function within a class
    this.id = id
    this.name = name
  }
  register() {
    return `${this.name} is now registered`
  }
}

const mari = new Person(1, 'Mari Bon')
const abi = new Person(2, 'Abi San')

// console.log(mari.register())

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Sango', 'Developer')

// console.log(emp.register())

// Generics 
// replace 'any' with 'T'. It's a placeholder of the type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['mari', 'jin', 'sango'])

// numArray.push('hello')
// strArray.push(1)



