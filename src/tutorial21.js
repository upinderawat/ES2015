class Person {
    constructor(name) {
        this.name = name;
    }
    static staticMethod() {
        console.log("Hey its static method");
    }
    helloMe() {
        console.log("hello it's " + this.name + " from Person class");
    }
}
class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    getId() {
        console.log("ID: " + this.id + " from Employee class");
    }
}
let p = new Person("Upinder");
let e = new Employee("Rohit", 2);
e.helloMe();
e.getId();
// console.log(typeof Person);
Person.staticMethod();
p.helloMe();
//Class is basically a function which is not hoisted
//# sourceMappingURL=tutorial21.js.map