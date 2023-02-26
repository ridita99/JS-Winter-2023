// F ---> K

// f temp from k temp = (T(°F) + 459.67)× 5 / 9
let fTemp = 35

let kTemp = (fTemp + 459.67) * 5 / 9;
console.log(`${fTemp}°F is equals to ${kTemp}°K`);

//C -> F

let cTemp = 2
let ftemp = (cTemp * 1.8) + 32
console.log(`${cTemp}°C is equals to ${fTemp}°F`)


// C -> K

let cTemp = 2

let kTemp = (cTemp) + 273.15
console.log(`${cTemp}°C is equals to ${kTemp}°K`);



//K -> F
//formula :T(°F) = T(K) × 9/5 - 459.67
let kTemp = 275.15
let fTemp = (kTemp) * 9 / 5 - 459.67
console.log(`${kTemp}°K is equals to ${fTemp}°F`);

// k---> c
//T(°C) = T(K) - 273.15
let cTemp = (kTemp) - 273.15
console.log(`${kTemp}°K is equals to ${cTemp}°c`)