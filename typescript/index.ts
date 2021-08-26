// GENERICS

type strArray = Array<string>
type numArray = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]

// const l1 = last[1]
// console.log(l1)

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]
const l3 = lastT([1, 2, 3]);
const l4 = lastT(['a', 'b']);
// console.log(l4)

const makeArr = (x:number) => [x]
const m = makeArr(5);
// console.log(m)

const makeArrT = <T>(x: T) => [x]
const m2 = makeArrT('b');
console.log(m2)

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y]
const m4 = makeArrXY(5, 'a');
console.log(m4)

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]
const m5 = makeTuple(5, 'a');
const m6 = makeTuple<string, number>('a', 123);
const m7 = makeTuple<string | null, number | boolean>('a', false);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]
const m8 = makeTupleWithDefault<string | null>('a', 3); 


// Generics extends

const makeFullNameConstraint = (obj: {
    firstName: string,
    lastName: string
}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({
    firstName: 'S',
    lastName: 'N'
})

const makeFullNameConstraintWithGenerics = <T extends {firstName: string, lastName: string}>(obj: T) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n3 = makeFullNameConstraintWithGenerics({firstName: 'S', lastName: 'N', age: 30, gender: 'male'})

const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const employee_01 = addNewEmployee({
    name: 'S',
    age: 30
})

console.log(employee_01);

// generics extends
const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const employee_02 = addNewEmployeeT({
    name: 'Suu',
    age: 30
})

console.log(employee_02.name);

const addNewEmployeeTWithConstraint = <T extends {name: string}>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const employee_03 = addNewEmployeeTWithConstraint({
    name: 'Suu',
    age: 30
})

// GENERICS INTERFACE
interface Resource<T> {
    uid: number,
    name: string,
    data:  T
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'SN',
    data: 'Ahhh'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'SN',
    data: {}
}

type NumberResource = Resource<number[]>

const number2: NumberResource = {
    uid: 2,
    name: '2',
    data: [1, 2, 3]
}

const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'SN',
    data: ['a', 'b', 'c']
}