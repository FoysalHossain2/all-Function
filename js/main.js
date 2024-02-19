/ if

const isUserLoggedIng = true
const temperature = 41


if (temperature === 41){
    // console.log("less then 50");
} else {

    // console.log("temperature is greater than 50");
}

const score = 150

// if(score > 100){
//     let power = 'fly'
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);


const balance = 2000

// if (balance > 500) console.log("test");

// if(balance < 500) {
//     console.log("less then 500");
// } else if (balance < 750) {
//     console.log("less then 750");
// } else if (balance < 900){
//     console.log("less then 900");
// } else {
//     console.log('less then 1500');
// }


// const month = "march";

// switch (month) {
//     case "january":
//         console.log("january");
//         break;
//     case "february":
//         console.log("february");
//         break;
//     case "march":
//         console.log("march");
//         break;

//     default:
//         break;
// }



/* falsy values*/

//false, 0, -0, Bigint 0n, "", null, undefined, NaN 

/* truthy */
// "0", 'false', "", [], {}, function(){}



const userEmail = [];

if(userEmail.length === 0){
    // console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log('object is empty');
}



/****** 
 false == 0
true
false == ''
true
0 == ''
true 
*********/



// Nullish coalescing Operator (??):

let val1;

// val1 = 5 ??  10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 35

// console.log(val1);



// Ternary Operator is different from Nullish coalescing Operator
/* Ternary Operator */

