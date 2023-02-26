// * 2. Arithmetic Operators(+,-,*,/)
//signs of operators 
// *% -> modulus
// *++ -> incerement
//*-- -> decrement 

let num1 = 10, num2 = 20, num3 = 30;
//you can use this path to write the variables number
let result1 = num1 + num2 + num3;

console.log(`${num1} + ${num2} + ${num3} = ${result1}`);     //10+20+30 = 60

console.log(`${num1} - ${num2} + ${num3} = ${num1 - num2 + num3}`)     //10-20+30= 20

console.log(`${num1} / 5 = ${num1 / 5}`);   //10/5=2

console.log(`${num1} * ${num2} = ${num1 * num2}`);   //10*20 = 200

/**
 *  + operator = means joining the strings 
 * when we use + operator which strings, it will join to strings
 *
 */

let name1 = 'Hello';
let name2 = 'World';
console.log(name1 + name2);           //'HelloWorld'
console.log(name1 + '' + name2);     // 'Hello' 'World'
console.log(`${name1}${name2}`);


/**
 *  % -> modulus 
 * Modulus finds the remainng value after a division 
 * try dividing the number without going into decimal part 
 * whatever remains that will be output using modulus operator 
 * 
 * for example, 10/2 = 5(remainder 0 )
 * 10/3 = 3 (remainder 1)
 * 8/3 = 2 (remainder 2)
 * 
 * 
 */
let m1 = 23237, m2 = 7;
let m3 = m1 % m2
console.log(`${m1} % ${m2} = ${m3}`);
console.log(`\nModulus Operator:\n${m1}% ${m2} = ${m3}`)   

/**
 * Minimum credit = 650
 * for every 50 point over 650, we will give only 1%
 * 750 - 650 = 100
 * 100 (100/50) = 2
 * 
 * 770
 * 770-650 = 120
 * 120 (120/50) = 2 
 * 
 */


/**
 * ->Increment : it increases the value in variable by 1
 * 
 * Post increment: if we put ++ operayor after the variable 
 *                -> post increment excutes after all kinds of code of that line (behind the scences )
 *                 -> We execute all other kind of code with value (after increment)
 * 
 * pre increment: if we put ++ operator before the variable 
 *               -> excutes before any kind of code on the line (behind the scene)
 *               -> we execute all other kind of code on the line (post increment)
 * 
 * ++inc or inc++ = it will be the same thing since it is increment. 
 * 
 * 
 * 
 */


console.log(`\nIncrement operator`)
let inc1 = 10; 
console.log(`inc1 = ${ inc1 }`); 

inc1++ ;       //increase the value in incl variable by 1
console.log(`inc1 = ${ inc1 }`)

++inc1 // increase the value in inc1 variavble by 1
console.log(`inc1 = ${ inc1 }`)   //inc =12

console.log(`inc1++ = ${ inc1++}`) //inc = 12

console.log(`++inc1 = ${++inc1}`)  //inc = 14
console.log(`inc1 = ${ inc1 }`);

console.log(`inc1++ = ${ inc1++}`); // post increment, console.log
// console.log, post increment 

console.log(`++inc = ${++inc1}`) //pre increment, console.log
// pre increment =16


//let num1 = 10, num2 = 20, num3 = 30
let inc2 = num1++ //assignemnt and post increment
console.log(`inc2 = ${inc2}`)
// assignemnt let inc2 = num1
// post increment (num1++)  num1= 11
console.log(`num1 =${num1}`)


//let num1 = 10, num2 = 20, num3 = 30
//num 3 = 31
//num 2 = 20
//res1 = num2 + num3
 //      = 20+31
let res1 = num2 + ++num3  // we have to solve  RHS , pre increment, (num3)
console.log(`n\res1 = ${res1}`);
console.log(`num2 =${num2}`)
console.log(`num3 = ${num3}`);


//num1 = 34 num2 = 50 num 3 = 45 num 4 = 67
let num5 = ++num1 + num4
console.log(`\num5 =${num5}`);
console.log(`num1 = ${num1}`);
console.log(`num4 = ${num4}`); 



