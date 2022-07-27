class Student {
    firstName: string;
    lastName: string;

    constructor(fiestName: string, lastName: string) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }

    greeter() {
        return "Hello，您好" + this.firstName + " " + this.lastName;
    }

    test(name: string, age?: number) {
        return {
            name: name,
            age: age
        }
    }
}

var user = new Student("王", "小明");
document.body.innerHTML = user.greeter();
console.log(user.test('小米'));
console.log(user.test('小米', 18))


