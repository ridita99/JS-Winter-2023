// we use operators with numbers, matmetical comparison, calculations. 


/** what is string?
 *  any value is quoted with double or single quotes. 
 * we learn functions, which helps to manupulate the strings 
 * 
 * 
 */
//let sentence = " everynone must follow the policy for a company"

// string stores values through index memory
// first character goes into - o
// second character goes into - 1
// third character goes into - 2 
// last character goes into - index last 
// Friday
// 012345 - index for friday 

/**
 * to find the number of characters in a string (to calculcate total number of boxes used to store string data )
 * or 
 * TO FIND THE LENGTH OF STRING 
 * property: length
 */
let dayName = "friDay"
console.log(`\ndayName -> ${dayName}`);
let dayNameLength = dayName.length
console.log(`dayName Length is ${dayNameLength}`);  // 6






let sentence = " everynone must follow the policy for a company"
console.log(`\nsentence -> ${sentence}`)   // use \n once when you decalre the name of the string as word or sentecne not for counting to the length of string
let sentenceLength = sentence.length
console.log(`sentence length is ${sentenceLength}`); // 47



let news = "Reading the NTSB report makes it clear that meaningful safety improvements require a comprehensive industry effort that brings together railcar and tank car manufacturers, railcar owners and lessors, and the railroad companies,"
console.log(`\nnews -> ${news}`);
let lastIndexNews = news.length - 1;
console.log(lastIndexNews)


/**
 * string stores in index 
 * in roder to find out the last index such as 
 * friday 
 * length = 6
 * last index = 5 
 * last index = length - 1
 */

let issue = "Silvergate’s woes are dragging on the crypto market. A closer look at the crypto-friendly bank’s series of issues."

let lastIndexIssue = issue.length - 1;
console.log(`\n\nlast Index Issue -> ${lastIndexIssue}`);




/**
 * To convert a string into Uppercase
 * 
 * function: toUppercase()
 * we really understand behind the scene of the functions of stuff
 * this uppercase function can be used for string. it copies the string value converts into upper case and returns the result 
 */

let sentenceUpperCase = sentence.toUpperCase();
// sentence.toUpperCase()
// copying the value of sentence-variable converting the abv value into uppercase give you the result


console.log(`\nsentence -> ${sentence}`);
console.log(`sentenceUppercase -> ${sentenceUpperCase}`);


let newsUpperCase = news.toUpperCase()
console.log(`\nnews -> ${news}`);
console.log(`newsUppercase -> ${newsUpperCase}`);


// function : sentence.Uppercase(); 
// you have to write the code: console.log(`\sentence -> ${sentence})
//console.log(`sentenceUppercase -> ${sentenceUppercase}`)


let stringVal = "hEllo wOrld"
console.log(`\nstringVal -> ${stringVal}`);

stringVal = stringVal.toUpperCase();
console.log(`stringval -> ${stringVal}`); // replaceing the original value in uppercase as a new value
/* function stringval.toUppercase();
HELLO WORLD 
stringval = HELLO WORLD
converting the copy into uppercase , new value got replaced by that 

*/

/**
 * to convert a string into lowercase 
 * function: sentence.toLowercase();
 * 
 * 
 */


/*To find if the given string statrs with given pattern 
function: startsWith();
input : pattern (types of pattern)
return: boolean (if the return is true or false)

*/


//let sentence = everynone must follow the policy for a company"

console.log(`\nsentence -> ${sentence}`)
console.log(`Checking startsWith()`)

let isStartsWith_Everyone = sentence.startsWith('Everyone');
console.log(`is sentence start with "Everyone" -> ${isStartsWith_Everyone}`);

let isStartsWith_Everyone_must = sentence.startsWith('Everyone must')
console.log(`is sentence start with "Everyone must" -> ${isStartsWith_Everyone_must} `);

