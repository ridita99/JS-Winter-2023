// Ternary : used in situation where we have two values and one of the value can be assigned depending on the conditions .
/**
 * lets say we can see a scenario where, 
 * bank :
 * credit score more than or equals 700
 * mortgage = 5.5
 *     otherwise = 6.5
 * 
 * syntax 
 * varname = condition ? value1True : value1False
 * 
 * 
 */
// creditScore = 700
//let mortgageRate = creditScore >= 700 ? 5.5 : 6.5
//console.log(`\ncreditScore -> ${creditScore}`);
//console.log(`MortgageRate -> ${mortgageRate}`); // 6.5


//let creditScore = 699
//let mortgageRate = creditScore >= 699 ? 5.5 : 6.5
//console.log(`\ncreditscore -> ${creditScore}`);
//console.log(`mortgageRate -> ${mortgageRate}`)  //5.5


/**
 * bank is giviing loan whoose credit score more than or equals to 750 or credit score 600 more than equal 600 for firsttime homebuyer 
 * mortgage = 5.5 
 * otherwise 
 * mortgage = 6.5
 * 
 * 
 */
let creditScore = 775;
let isfirstTineHomebuyer = true;

let mortgageScore1 = creditScore >= 750 || (creditScore >= 600 && isfirstTineHomebuyer === true) ? 5.5 : 6.5;
console.log(`\ncreditScore -> ${creditScore}`);
console.log(`\nisfirstTimeHomebuyer -> ${isfirstTineHomebuyer}`);
console.log(`\nmortgagescore1 -> ${mortgageScore1}`);  //5.5 



/**
 * bank is giviing loan whoose credit score more than or equals to 750 or credit score 600 more than equal 600 for firsttime homebuyer
 * mortgage = 5.5
 * otherwise
 * mortgage = 6.5
 *
 *
 */
    //let creditScore = 99999
//let isfirstTineHomebuyer = ;
//let mortgageRate = creditScore >= 750 || (creditScore >= 600 && isfirstTineHomebuyer === true) ? 5.5 :6.5


/**
 * whenever you have  to compare between two boolean values;
 * isfirstHomebuyer === true ? 5.5 :6.5   isfirstTineHomebuyer === true
 * True === true
 * true === true
 *
 *
 * isFirsHomebuyer === true
**/
// unit testing - code level testing in order to check. 

//  