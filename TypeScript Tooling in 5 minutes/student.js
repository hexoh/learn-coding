var Student = /** @class */ (function () {
    function Student(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Student.prototype.greeter = function () {
        return "Hello，您好" + this.firstName + " " + this.lastName;
    };
    Student.prototype.test = function (name, age) {
        return {
            name: name,
            age: age
        };
    };
    return Student;
}());
var user = new Student("王", "小明");
document.body.innerHTML = user.greeter();
console.log(user.test('小米'));
console.log(user.test('小米', 18));
