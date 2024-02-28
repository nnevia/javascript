// const user = {
//     name: "John",
//     age: 45,
// }

// console.log(user.name); // John
// console.log(user.hasOwnProperty("email")); // false

// Constructor Function
// function Person(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
// }

// Person.prototype.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// const john = new Person('john', 'john@abc.com', '7-10-91');
// const han = new Person('han', 'han@abc.com', '2-8-91');

// console.log(john);
// console.log(han);



// // Object.create()
// function Person(name, email, birthday) {
//     let person = Object.create(personsPrototype);
//     person.name = name;
//     person.email = email;
//     person.birthday = new Date(birthday);
//     return person;
// }

// const personsPrototype = {
//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const han = new Person('han', 'han@abc.com', '2-8-91');
// console.log(han);


// // prototype chain 
// const testArray = [1, 2, 3];
// testArray.push(4);
// console.log(testArray); // [1, 2, 3, 4]


// console.log(Array.prototype);

// const testArray = [1, 2, 3];
// Array.prototype.push = function (x) {
//     return 'pushed value: ' + x;
// }

// console.log(testArray.push(4));
// console.log(testArray)
