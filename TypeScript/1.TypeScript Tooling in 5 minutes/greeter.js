var Students = /** @class */ (function () {
    function Students(firstNames, middleInitials, lastNames) {
        this.firstNames = firstNames;
        this.middleInitials = middleInitials;
        this.lastNames = lastNames;
        this.fullName = firstNames + " " + middleInitials + " " + lastNames;
    }
    return Students;
}());
function greeter(person) {
    return "Hello, " + person.firstNames + " " + person.lastNames;
}
var users = new Students("Jane", "M.", "Users");
document.body.innerHTML = greeter(users);
