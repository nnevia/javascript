// const sym1 = Symbol();
// const sym2 = Symbol();
// const sym3 = Symbol('hi');
// console.log(sym1)
// console.log(sym2)
// console.log(sym1 === sym2);
// console.log(sym3.description);

let carA = {
    id: 1,
    name: 'morning',
    brand: 'BMW',
    price: 1000000,
}


const idSym = Symbol('id');
carA[idSym] = 300;
// carA.id = 300;

// console.log(Object.getOwnPropertyNames(carA))

// for( const key in carA) {
//     console.log(key);
// }

// console.log(Object.getOwnPropertySymbols(carA));

// console.log(carA);

// const sym1 = Symbol.for('sym1');
// const sym2 = Symbol.for('sym22221');
// // console.log(sym1 === sym2);

// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));

// const RED = Symbol('red');
// const ORANGE = Symbol('orange');
// const YELLOW = Symbol('yellow');
// const BLUE = Symbol('blue');
// const dog = 'blue';

// function getImportantLevel(color) {
//     switch (color) {
//         case RED:
//             return 'very important';
//         case ORANGE:
//             return 'important';
//         case YELLOW:
//             return 'little important';
//         case BLUE:
//             return 'not important';
//         default:
//             console.log(`${color} not included`);
//     }
// }

// console.log(getImportantLevel(BLUE));
// console.log(getImportantLevel(dog));

const length = Symbol('length');
class car {
    constructor() {
        this[length] = 0;
    }

    add(brand, name) {
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new car();
myCars.add('BMW', 'morning');
myCars.add('kia', 'tusan');
myCars.add('hyundai', 'gv80');

for (const car in myCars) {
    console.log(car, myCars[car]);
}