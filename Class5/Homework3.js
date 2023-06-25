/**
 * const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */


//const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */


const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`\nsentence1 -> ${sentence1}`);

let sentence1LowerCase = sentence1.toLowerCase();
console.log(`sentence1LowerCase -> ${sentence1LowerCase}`);


let sentence1_Replace_a_QueenandKing = sentence1.replace('a', 'Queen and King');
console.log(`sentence1_Replace_a_QueenandKing -> ${sentence1_Replace_a_QueenandKing}`);





//const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/* 
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 
 
**/

let sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`\nsentence2 -> ${sentence2}`);

let sentence2_length = sentence2.length;    //sentence.length
console.log(`sentence2_length -> ${sentence2_length}`);



//does sentence2 start with 'COM' (ignoring cases) // boolean

let sentence2LowerCase = sentence2.toLowerCase();
console.log(`\sentence2LowerCase -> ${sentence2LowerCase}`)

let pattern_LowerCase = 'COM'.toLowerCase();
let indexOf_COM_ignoringCases = sentence2LowerCase.indexOf(pattern_LowerCase) // once we define the pattern define the index of that word ignoring lowercases 

console.log(`indexOf 'COM' ignoringCases -> ${indexOf_COM_ignoringCases}`);




let issentence2Startswith_COM = sentence2.startsWith('COM');
console.log(`is sentence2_startsWith -> ${issentence2Startswith_COM}`); //false


//does sentence2 endsWith 'Google news' (ignoring cases)


let pattern2_LowerCase = 'Google news'.toLowerCase();
let indexOfGooglenewsIgnoringCases = sentence2LowerCase.indexOf(pattern_LowerCase) // once we define the pattern define the index of that word ignoring lowercases 

console.log(`indexOf 'Google news' ignoringCases -> ${indexOfGooglenewsIgnoringCases}`);

let issentence2EndsWith_Googlenews = sentence2.endsWith('Google news');
console.log(`is sentence2_endsWith -> ${issentence2EndsWith_Googlenews}`);


/**
 * The string includes() function in javascript is used to check if the set of characters (string) is present inside another string. The string includes in javascript returns only boolean values. True if the string is found and false if the string is not found.
 */


//does word 'from' present only once in sentence2 (ignoring cases)

// we have to use indexof and last indexof function in oder to see if the string has the same word based on same index
// in order to see if its true / false we will use equals to operator 

let indexOf_from = sentence2LowerCase.indexOf('from');
let lIndexOf_from = sentence2LowerCase.lastIndexOf('from');

let result4 = indexOf_from === lIndexOf_from;

console.log(`does word 'from' present only once in sentence2 (ignoring cases) -> ${result4}`);




//the character present at second-last index in the String

let secondLastIndex = sentence2.length - 2
let charAt_secondLastIndex = sentence2.charAt(secondLastIndex)

console.log(`is the character present at second-last index in the String -> ${charAt_secondLastIndex}`);



