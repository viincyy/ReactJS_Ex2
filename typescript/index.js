// GENERICS
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
// const l1 = last[1]
// console.log(l1)
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(['a', 'b']);
// console.log(l4)
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// console.log(m)
var makeArrT = function (x) { return [x]; };
var m2 = makeArrT('b');
console.log(m2);
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 'a');
console.log(m4);
var makeTuple = function (x, y) { return [x, y]; };
var m5 = makeTuple(5, 'a');
var m6 = makeTuple('a', 123);
var m7 = makeTuple('a', false);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m8 = makeTupleWithDefault('a', 3);
// Generics extends
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n1 = makeFullNameConstraint({
    firstName: 'S',
    lastName: 'N'
});
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n3 = makeFullNameConstraintWithGenerics({ firstName: 'S', lastName: 'N', age: 30, gender: 'male' });
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var employee_01 = addNewEmployee({
    name: 'S',
    age: 30
});
console.log(employee_01);
// generics extends
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var employee_02 = addNewEmployeeT({
    name: 'Suu',
    age: 30
});
console.log(employee_02.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var employee_03 = addNewEmployeeTWithConstraint({
    name: 'Suu',
    age: 30
});
var resourceOne = {
    uid: 1,
    name: 'SN',
    data: 'Ahhh'
};
var resourceTwo = {
    uid: 1,
    name: 'SN',
    data: {}
};
var number2 = {
    uid: 2,
    name: '2',
    data: [1, 2, 3]
};
var resourceThree = {
    uid: 1,
    name: 'SN',
    data: ['a', 'b', 'c']
};
