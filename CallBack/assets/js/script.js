"use strict"

// function getSum(n){

//     let sum=0;
//     for (let i = 0; i <= n; i++) {

//         sum+=i
//     }
//     return sum;
// }
// console.log(getSum(12));


function getSum2(n){
    if(n==1){
        return n;
    }else{
        return n+(getSum2(n-1))
    }
}
console.log(getSum2(17));

let array=[1,2,3,4,6,7,8,9,13]

function getSumEven(arr){
    let result =0;

   for (const item of arr) {
       if(item%2==0){
           result+=item;
       }
   }
   return result;
}
console.log(getSumEven(array));


function getSumOdd(arr){
    let result =0;

   for (const item of arr) {
       if(item%2==1){
           result+=item;
       }
   }
   return result;
}
console.log(getSumOdd(array));

let array=[1,2,3,4,6,7,8,9,13,17]
function isEven(n) {
    return n % 2 == 0;
}
function isOdd(n) {
    return n % 2 != 0;
}

function getSumByCondition(arr, callback){

    let result=0;
    for (const item of arr) {

        if(callback(item)){
            result+= item;
        }
        
    }
    return result;

}
console.log(getSumByCondition(array, isEven));
console.log(getSumByCondition(array, isOdd));

