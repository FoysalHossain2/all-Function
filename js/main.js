// function addTwoNum(num1 , num2){
//     // let result = (num1+ num2);
//     // return result

//     return num1 + num2
// }

// const result = addTwoNum(3,7)
// // console.log(result);

// function loginUserMessage(userName) {

// } 

function calculator(val1, val2, ...num1){
    return num1
}

// console.log(calculator(200,300,400,500));

// const user ={
//     userName: 'Foysal Hossian',
//     price: 200,
// }

// function handleObject(anyObject){
//     console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
// }

// handleObject(user)




/* Nested scop*/

function one(){
    const userName = "Foysal"

    function two(){
        const website = 'youtube'
        // console.log(website);
    }
    // console.log(userName); 

    two()
}

one() 



/*if(true){
    const userName= 'Hossain'
    if(userName === 'Hossain'){
        const website = ' google'
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);*/



// ++++++++++++ interesting +++++++++++

// function addOne(num){
//     return num + 1
// }

// addOne(5) 


// function one(){
//     const userName = "Foysal"

//     function two(){
//         const website = "Facebook"
//         console.log(userName);
//     }

//     // console.log(website);

//     two()
// }

// one()



fun2(5)
function fun2(num){
    return num + 4
}



addFun(6)
const addFun = function fun3(num){
    return num + 10
}


// this is function scop
function myFunction(){
    let carName = "Volvo" 
}

