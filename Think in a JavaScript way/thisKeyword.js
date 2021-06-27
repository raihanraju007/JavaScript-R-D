//implicit binding
//explicit binding
//new binding
//window binding



// var printPlayName = function (name){
//     console.log(name);
// };
// printPlayName("raju");



// var printPlayNameFunction = function (obj){
//     obj.printPlayName = function (){
//         console.log(this.name);
//     };
// };
//
// var sakib = {
//     name: 'sakib',
//     age: 35,
// };
//
// var tamim = {
//     name: 'tamim',
//     age: 36,
// };
//
// printPlayNameFunction(sakib);
// printPlayNameFunction(tamim);
// sakib.printPlayName();
// tamim.printPlayName();

// var Person = function (name,age){
//     return {
//         name: name,
//         age: age,
//         printName: function (){
//             console.log(this.name);
//         },
//     };
// };
//
// var sakib = Person("Raju",35);
// sakib.printName();

// var printName = function (v1, v2, v3){
//     console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
// };
//  var sakib = {
//      name: "sakib",
//      age: 35,
//  };
//  var v1 = 'Handsome';
//  var v2 = 'All-rounder';
//  var v3 = 'Best Player';
//
//  var v = [v1,v2,v3];
//
//  printName.call(sakib,v1,v2,v3);
//
// var newFunc = printName.bind(sakib,v1,v2,v3);
// newFunc();

// function Person(name,age){
//     this.name = name;
//     this.age  =age;
//     console.log(`${name} is ${age} years old`);
// }
// var sakib = new Person("Sakib",35);

var PrintName = function (){
    console.log(this.name);
};
var sakib ={
    name: "sakib",
};
PrintName();
