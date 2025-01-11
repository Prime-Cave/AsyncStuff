// Obejct Spread Operator
const Animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
} // This is an object

const { tiger, ...rest } = Animals; // This would get the tiger property and store it in the tiger variable and store the rest of the properties in the rest variable
console.log(rest);

const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}
const result=  sum(...array); // This would spread the array into the function

console.log(result); // This would log the result of the sum function