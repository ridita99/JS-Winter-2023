console.log('\nQ1')
arr = [1, 2, 3, 4, 5]
console.log('/n*** splice() ***');

console.log('1, 2, 3, 4, 5 -> ${1,3,4,5}');
number.splice('2'); // removing 2 only 
console.log('1, 2, 3, 4, 5 -> ${1,3,4,5}')
// (1,3,4,5)


const arr1 = ['21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65']
const num1 = 12;
let arr1_splice = num1.splice('12') //removing 12 only 
let arrResult = ['21, 32, 43, 45, 65']
console.log(arr1);     // 21, 32, 12, 43, 45, 65, 12
console.log(arr1Result);   //21, 32, 43, 45, 65]

console.log('\nQ2');
const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 2345,
        balance: 2000
    },
    {
        accountNumber: 3456,
        balance: 3000
    },
    {
        accountNumber: 4567,
        balance: 4000
    },
    {
        accountNumber: 5678,
        balance: 5000
    },
]
let total = 4700

// code

console.log(`Total of all balances in the accounts array: ${total}`); //4700

console.log('\nQ3');
const arr3 = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];

console.log(arr3);
console.log('the index of second occurance of baSeBall'(ignoring cases) in the arr3 - array: ${ arr3Result }');
// arr3Result = 5

const arr3 = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon]
console.log('the index of second occurance of baSeBall'(ignoring cases) in the arr3 - array: ${ arr3Result }');
// arr3Result = 3

const arr3 = ['earTh', 'JUPiTer', 'nePtUne', 'saturn', 'BASeball'];
console.log(arr3);
console.log('the index of second occurance of baSeBall'(ignoring cases) in the arr3 - array: ${ arr3Result }');

//arr3Result = -1


const arr3 = ['earTh', 'nePtUne', 'saturn'];
console.log(arr3)
console.log('the index of second occurance of baSeBall'(ignoring cases) in the arr3 - array: ${ arr3Result }');

 //arr3Result = -1