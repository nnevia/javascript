// let x = 0;
// const numberUp = () => x += 1;
// console.log(numberUp());
// console.log(x);

// let x = 0;
// const pureNumberUp = (num) => num += 1;
// console.log(pureNumberUp(x));
// console.log(x);

const alpabetArray = ['A', 'B'];
// const addItemToArray = (originalArray, newItem) => {
//     originalArray.push(newItem);
//     return originalArray;
// }

// console.log(addItemToArray(alpabetArray, 'C'));
// console.log(alpabetArray);


const pureAddItemToArray = (originalArray, newItem) => {
    return [...originalArray, newItem]
}

console.log(pureAddItemToArray(alpabetArray, 'C'));
console.log(alpabetArray);
