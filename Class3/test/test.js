console.log(`\nQ1`)
const arr1 = [1, 2, 3, 4, 5];
const num1 = 2;
let arrResult = [1, 3, 4, 5];

for (const num of arr1) {
    if (num !== num1) {
        arr1Result.push(num)
    }
}

console.log(arr1); //(1, 2, 3, 4, 5);
console.log(arr1Result)  //(1,3,4,5);

/**
 * (1,2,3,4,5)
 * [0]
    if ([0] !== num1)
        push [0] in arr1Result
    
    [1]
    if ([1] !== num1)
        push [1] in arr1Result

    [2]
    if ([2] !== num1)
        push [2] in arr1Result
 * 
 */