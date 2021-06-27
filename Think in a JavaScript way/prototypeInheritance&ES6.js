// function Person(name,age){
//     this.name = name;
//     this.age  = age;
// }
// Person.prototype = {
//     eat: function (){
//         console.log(`${this.name} is eating`);
//     },
// };
//
// const sakib = new Person("Sakib",35);
// console.log(sakib);
// const  tamim = new Person("Tamim",36);
// console.log(tamim);
//
// var f = function () {};
//
// Object.prototype.sumit = function (){
//     console.log("I am Summit");
// };
// var p = {};
// p.sumit();

// function Person(name,age){
//     this.name = name;
//     this.age  = age;
// }
//
// function Cricketer(name,age,type,country){
//     Person.call(this);
//     this.name = name;
//     this.age  =age;
//     this.type = type;
//     this.country = country;
// }
// Person.prototype ={
//     eat: function (){
//         console.log(`${this.name} is eating`);
//     },
// };
// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;
//
// let sakib = new Cricketer("Sakib", 35,"All Rounder","Bangladesh");
// console.log(sakib.eat());

// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
// }
//
// class Cricketer extends Person{
//     constructor(name,age,type,country) {
//         super(name,age);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     play(){
//         console.log(`${this.name} is playing`);
//     }
// }
//
// let sakib = new Cricketer("Sakib",35,"All Rounder", "Bangladesi");
// sakib.play();

// class Person{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     get setName(){
//         return this.name;
//     }
//     set setName(name) {
//         this.name =name;
//     }
// }
// let sakib = new Person('sakib',35);
// // console.log(sakib.setName);
//
// sakib.setName = 'Tamim';
// console.log(sakib.name);

