// FUNCTION SIGNATURE
// let greet: Function
let greet : (a: string, b: string) => void
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calculate : (a: number, b:number, c: string) => number
calculate = (numOne: number, numTwo: number, action: string) => action == 'add' ? numOne + numTwo : numOne - numTwo

console.log(calculate(4, 2, 'add'))

type Student2 = {name: string, age: number}
let printStudent: (student: Student2) => void 
printStudent = (myStudent: Student2) => {
    console.log(`${myStudent.name} has ${myStudent.age} years old`)
}

printStudent({name: 'S', age: 25});