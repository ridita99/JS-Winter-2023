
/* Question-1:
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
//let sentence1 = 'Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.';
//let result1 = 0;
// code
//console.log(`\result1 -> ${result1}`)

//let creditScore = 699
//let mortgageRate = creditScore >= 699 ? 5.5 : 6.5
//console.log(`\ncreditscore -> ${creditScore}`);
//console.log(`mortgageRate -> ${mortgageRate}`)  //5.5

//let creditScore = 99999
//let isfirstTineHomebuyer = ;
//let mortgageRate = creditScore >= 750 || (creditScore >= 600 && isfirstTineHomebuyer === true) ? 5.5 :6.5


//sentence1 = 'go to home'
//result1 = 25
let sentence1 = ''
let result1 = 0;
let com1 = sentence1.length > 100;
let com2 = sentence1.startsWith('go to')
console.log(`\nsentence1 -> ${sentence1}`)

result1 = com1 || com2 ? 25 : 35
console.log(`\result1 -> ${result1}`)



//sentence2 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
// result2= 25

let sentence2 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
let result2 = 0
let com3 = sentence2.length > 100
let com4 = sentence2.startsWith('go to')

result3 = com3 || com4 ? 25 : 35
console.log(`result3 -> ${result3}`);


let sentence3 = 'View the latest news'
let com5 = sentence2.length > 100
let com6 = sentence2.startsWith('go to')

result4 = com5 || com6 ? 25 : 35
console.log(`result4 -> ${result4}`)



let sentence4 = 'View the latest news'
let com7 = sentence2.length > 100
let com8 = sentence2.startsWith('go to');

result6 = com7 || com8 ? 25 : 35
console.log(`result6 -> ${result6}`);