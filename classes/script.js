// class Person {
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = new Date(birthday)
//     }

//     introduce() {
//         return `Hello my name is ${this.name}`;
//     }

//     static multipleNumbers(x, y) {
//     return x * y;
//     }
// }

// const john = new Person('john', 'john@abc.com', '10-3-91');
// console.log(john);


class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);

        this.phone = phone;
        this.address = address;
    }
}

const john = new Client('john', 'john@abc.com', '010-000-1111', '서울');

console.log(john.introduce());