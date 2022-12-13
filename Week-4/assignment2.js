class Person {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
}
var person1 = new Person("Abhishek", 25);

class Teacher extends Person {
    teach() {
        let subject = "Computer Science";
        return `${person1.firstName} is now teaching ${subject}`;
    }

    get output1() {
        return this.teach();
    }
}

var teacher1 = new Teacher();
console.log(teacher1.output1);