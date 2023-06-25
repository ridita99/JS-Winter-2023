//let sentence1 = "Both Biden and Republican House Speaker Kevin McCarthy exceeded expectations during the high wire act around the debt ceiling."
//console.log('\nChecking StartsWith(Both)');
//console.log(`sentence -> ${sentence1}`);

// console.log(`\n ** function - endswith **'


//let StartsWith_Both = sentence1.startsWith('Both');   // declare the value first 
//console.log(`is sentence1 Starts with 'Both' -> ${StartsWith_Both}`);


//let Endwith_the = sentence1.endsWith('the');
//console.log(`is setnece1 ends with the -> ${Endwith_the}`); // false

/**Question-1:
 * 
 * if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
 *      assign 25 into result1
 * otherwise
 *      assign 35 into result1
 * 
 * sentence1 = 'go to home'
 * result1 = 25
 * 
 * sentence1 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
 * result1 = 25
 * 
 * sentence1 = '' 
 * result1 = 35
 * 
 * sentence1 = 'View the latest news'
 * result1 = 35
 * 
 * 
 * Hint: Ternary operator
 * 
  */
/**let setnece1 = 'go to home'
let result1 = 0
let com1 = sentence1.length > 100
let com2 = sentence1.startsWith('go to');

result1 = com1 || com2 ? 25 : 35;

console.log(`result1 -> ${result1}`);


let sentence2 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
//let result2 = 0

com3 = sentence2.length > 100
com4 = sentence.startsWith('go to');

result2 = com3 || com4 ? 25 : 35;

**/

//console.log(`result2 -> ${result2}`)

// concatenate 
// concatenate helps to connect all the strings together 
//console.log(`\n ** function - concat **`)

let str1 = 'Hello', str2 = 'America', str3 = 'How'

console.log(`\nstr1 -> ${str1}`);
console.log(`\nstr2 -> ${str2}`);
console.log(`\nstr3 -> ${str3}`);
let str = str1.concat('', str2, str3,)
console.log(`\nstr1.concat('', str2, str3,) -> ${str}`)




/**
 * to remove extra spaces from the string
 * any number of spaces before the first character of the string 
 * 
 * 
 * 
 */

console.log(`\n** function - trim **\n`)

let stmt1 = 'hello  Dear How are  you  doing?'
console.log(`'*' + stmt1 + '*'`);

let stmt1_trim = stmt1.trim()
console.log('*' + stmt1 + '*');
console.log('\n*' + stmt1_trim + '*');

let sentence1 = 'Musk was speaking at Paris VivaTech innovation conference. The younger Arnault ribbed Musk about Tesla billion market cap'
console.log(`sentence1 -> ${sentence1}`);

//which character present in index 6

//console.log(`n** function - charAt **\n')
let ChartAt6 = sentence1.charAt(6)
console.log(`charAt index-6 -> ${ChartAt6}`);


let charAt700 = sentence1.charAt(700);
console.log(`charAt index 700 -> ${charAt700}`);



/**
 * find the character present  the last index of the sting
 * 
 * teps to find out -> 1. find the character presetne at the last string that means use charAt
 * find  last index = sentence.length-1
 */

let sentence = 'The potential for autonomy is that the value of autonomy is so high, that even if you have a discount, a percentage probability of autonomy happening, that is so incredibly valuable'
console.log(`\nsentence -> ${sentence}`);

let lIndex = sentence.length - 1
console.log(`\nlIndex -> ${lIndex}`);

let charAt180 = sentence.charAt(180);
console.log(`\n charAt index 180 -> ${charAt180}`);



let sentence2 = 'Through a dual-enrollment program, she earned college credits while completing her middle school classes.'
console.log(`\nsentence2 -> ${sentence2}`);

let lIndex2 = sentence2.length - 1
console.log(`\nlIndex2 -> ${lIndex2}`);

let charAt104 = sentence2.charAt(104);
console.log(`\n charAt index -> ${charAt104}`);


let sentence3 = 'Russia accuses Wagner chief of urging armed rebellion'
console.log(`\nsentence3 -> ${sentence3}`);

let lIndex3 = sentence3.length - 1
console.log(`\nlIndex3 -> ${lIndex3}`);

let charAt_52 = sentence3.charAt(52);
console.log(`char at index-(52 -> ${charAt_52})`);



/**
 * To find which index is given pattern is present 
 * function: IndexOf()
 * input: Pattern 
 * returns : Index Num 
 * 
 */

let sentence4 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE neWs aggRegateD frOM SoURCeS alL oVeR tHE wORld by GOOgle NeWS.';
console.log(`\nsentence4 -> ${sentence4}`);

let indexOf_S = sentence4.indexOf('S')
console.log(`Index of 'S'  -> ${indexOf_S}`);


let indexOf_Reg = sentence4.indexOf('Reg');
console.log(`Index of 'Reg' -> ${indexOf_Reg}`);


let indexOf_E = sentence4.indexOf('E')
console.log(`Index of 'E' -> ${indexOf_E}`);

