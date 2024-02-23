// const sum = (x, y) => x + y;

// const curriedSum = x => y => x + y;

// console.log(curriedSum(10));
// console.log(curriedSum(10)(20));


// const makeFood = (ingredient1) => {
//     return (ingredient2) => {
//         return (ingredient3) => {
//             return `${ingredient1} ${ingredient2} ${ingredient3}`;
//         }
//     }
// }

// const hamburger = makeFood('Bread')('ham')('tomato');
// console.log(hamburger);

// const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>   `${ingredient1} ${ingredient2} ${ingredient3}`;

// const newHamburger = cleanerMakeFood('Bread')('ham')('potato');
// console.log(newHamburger);

function log(date, importance, message) {
    alert(`[${date.getHours()}: ${date.getMinutes()}]: [${importance}] ${message}`);
}

// log(new Date(), "DEBUG", 'some bug')

// currying function

// function curry(f) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return f(a, b, c);
//             }
//         }
//     }
// }

// const curriedLog = curry(log);
// curriedLog(new Date())("DEBUG")('some bug')

function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const sum = (x, y, z, j, a) => x + y + z + j + a;

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4)(5))