/*String
 *      any value within a single-quotes or double-quotes is a String.
 * 
 * functions:
 *      String-Concept-1.js
 *              length (property)
 *              toUpperCase()
 *              toLowerCase()
 *              startsWith()
 *      String-Concept-2.js
 *              endsWith()
 *              includes()
 *              concat()
 *              trim()
 *              charAt()
 *              indexOf()
 *              lastIndexOf()
 *              replace()
 *              padStart()
 *              padEnd()

given String ends with given pattern
- to find if the given strings ends with given pattern
- function: endsWtith()
-return:boolean
-input: pattern

- if the string ends with Exactly with the given pattern, finction returns true 
otherwise, 
function returns false 





*/

let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

let endsWith_News = sentence.endsWith('News')
console.log(`is sentence end with 'News' -> ${endsWith_News} `);

let endsWith_NEws = sentence.endsWith('NEws');
console.log(`is sentence end with 'NEws -> ${endsWith_NEws}`);


let endsWith_NeWs = sentence.endsWith(' NeWs.');
console.log(`is sentence end with NEws -> ${endsWith_NEws}`);


let endsWith_Ogle_News = sentence.endsWith('Ogle NeWs.')
console.log(`is sentence end with Ogle NeWs. -> ${endsWith_Ogle_News}`)


// difference between fucntion and property 

// To turn the sentece with lower case 


let stmt = 'Go tO NBCNews.com for breaking news, videos";'
/**
 * stmt-intoLowercase()
 * go to nbcnews.com for breaking news, videos
 * 
 * converted the pattern into lowercase - go to 
 * applied startswith- function on lowered values
 */

/*let stmt_LowerCase = stmt.toLowerCase();
let pattern_toLowerCase = 'Go tO'.toLowerCase();
let result = stmt_LowerCase.startsWith(pattern_toLowerCase)

console.log(`\nFind if the stmt starts with "Go tO"(ignoring cases))
console.log(` stmt -> ${ stmt }`);
console.log(`pattern -> 'Go tO'`)
console.log(`stmt starts with "Go tO"(ignoring cases) -> ${ result }`)


*/
console.log(`stmt -> ${stmt}`)
let stmt_LowerCase = stmt.toLowerCase();
let pattern_toLowerCase = 'Go tO'.toLowerCase();
let result = stmt_LowerCase.startsWith(pattern_toLowerCase);

console.log(`result -> ${result}`);


/**
 * in order to find out if the string includes /contains a given pattern 
 * function: includes()
 *  input : pattern
 * return : boolean 
 * 
 */

// string concept -2 

let sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE neWs aggRegateD frOM SoURCeS alL oVeR tHE wORld by GOOgle NeWS.';
console.log(`\nsentence2 -> ${sentence2}`);

let lastIndexOf_P = sentence2.lastIndexOf('P')
console.log(`last Index of 'P' -> ${lastIndexOf_P}`)  //55

let lastIndexOf_S = sentence2.lastIndexOf('S')
console.log(`last Index of 'S' -> ${lastIndexOf_S}`) // 126



//find the index of 'NeWS' (ignoring cases) in sentence

let sentenceLowerCase = sentence.toLowerCase();
console.log(`sentenceLowerCase -> ${sentenceLowerCase}`)  //define the sentence in lowercase by delcaring it 

let patternLowerCase = 'News'.toLowerCase(); // write down which word needds to be ignored lowercase when you look for pattern
let indexOf_News_ignoringCases = sentenceLowerCase.indexOf(patternLowerCase) // once we define the pattern define the index of that word ignoring lowercases 

console.log(`indexOf 'News' ignoringCases -> ${indexOf_News_ignoringCases}`)


// replacing pattern 

let sentence_Replace_A_B = sentence.replace('A', 'B');
console.log(`sentence after replace 'A' with 'B' -> ${sentence_Replace_A_B}`);



// pad start - adding length to the string 

let Sentence = 'Hello World'
console.log(`\nSentence -> ${Sentence}`);

let Sentence_16_$$ = Sentence.padStart(3, '$$');
console.log(`\nSentence after adding '$$' to make length=16 -> ${Sentence_16_$$}`)
