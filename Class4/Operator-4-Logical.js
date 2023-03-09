/** operators are used 
 * && - and operator which means both conditions should be met in order to result to be true 
 * || - or operator which means either of the condtions should be true /falso to turn out the result ture/false 
 * ! - not operator, 
 * 
 * Example (and operator)
 */
let lvar1 = 10, lvar2 = 20, lvar3 = 30, lvar4 = 40
let lRes1 = lvar2 < lvar4 && lvar1 === (lvar4 - lvar2)
/**
 * lRes1 = lvar2 < lvar4 && lvar1 === (lvar4 - lvar2)
 * lRes1 = lvar2 < lvar4 && lvar1 === 20 
 * lres1 = true && false
 * lRes1 = false
 *
 * Example (or operator) 
 */
let Res2 = lvar2 < lvar4 || lvar1 === (lvar4 - lvar2)

/**
 * let Res2 = lvar2 < lvar4 || lvar1 === 20 
 * let Res2 = true || false 
 * let Res2 = true  
 * either one of the condition is true 
 * there is no alteration like if the both of the statements are false then the result will be false 
 */

let Res3 = (lvar1 > lvar4 || lvar4 + lvar1 >= lvar3 + lvar2) && lvar2 - lvar3 <= lvar4
/**
 * let Res3 = (10 > 40 || 50 >= 50 ) && -10 <=40
 * let Res3 = (false || true) && true   //any one of the condition has to be true for or operator 
 *          = true && true
 *          = true
 *
 */

/** 
 * not operator 
 * it is the opposite of the result, such as true to false or false to true 
 * 
 * example
 * 
 
*/let Res4 = (lvar1 > lvar4 || lvar4 + lvar1 >= lvar3 + lvar2) && !(lvar2 - lvar3 <= lvar4)
   /**let Res4 =(10>40 || 40 + 10 >= 30+20) && !(20-30 <= 40)
 let Res4 = (false ||50 >= 50) && !(-10 <= 40)
 let Res4 = (false || true) && !(true)
         = true && !(true)
         = true && false      // used not operator that turns into oppposite result 
                 = false              // for and operator botjh conditions has to be true 
*//

    // let accountBalance = 10000
    l//et withdraw = 700

accountBalance >= withdraw
// allow withdraw

!(accountBalance < withdraw);
// allow withdraw (true)





