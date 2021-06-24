//
// function Person(name, age){
//     let person =Object.create(Person.prototype);
//     person.name = name;
//     person.age  = age;
//
//     return person;
// }
//
// Person.prototype = {
//     eat() {
//         console.log(`Person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`Person is Play`);
//     },
// };
//
// const sakib = Person("sakib",35);
// const tamim = Person("tamim",35);
// tamim.play();
//
//

class Person{
    constructor(name,age) {
        this.name = name;
        this.age  = age;
    }
    eat(){
        console.log(`Person is eating`);
    }
    sleep(){
        console.log(`Person is sleeping`);
    }
    play(){
        console.log(`Person is play`);
    }
}
const sakib =new Person("sakib",35);
const tamim =new Person("tamim",35);
tamim.play();


// let persons = new Array();
// console.log(Array.prototype);

