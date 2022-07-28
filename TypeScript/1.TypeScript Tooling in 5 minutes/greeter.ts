class Students {
    fullName: string;
    constructor(public firstNames: string, public middleInitials: string, public lastNames: string) {
        this.fullName = firstNames + " " + middleInitials + " " + lastNames;
    }
}

interface Person {
    firstNames: string;
    lastNames: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstNames + " " + person.lastNames;
}

let users = new Students("Jane", "M.", "Users");

document.body.innerHTML = greeter(users);