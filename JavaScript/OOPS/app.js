//factory function to create Objects
// function PersonMaker(name,age){
//     const Person={
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };
//     return Person;
// }

// let p1= PersonMaker("adam",25);
// let p2= PersonMaker("eve",25);


//constructor
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }

// Person.prototype.talk= function(){
//     console.log(`Hi, my name is ${this.name}.`);
// }

// let p1= new Person("adam",25);
// let p2= new Person("eve",25);


//class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1= new Person("adam",25);
let p2= new Person("eve",25);