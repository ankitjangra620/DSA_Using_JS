// Q :  Implememet the Palindrome.

// Note : 1. .slice will slice upto upper limit it will not include upper limit
//        2. .reverse can only reverse the array and .split will split in array and join will join all elements of array 
//        3. so to reverse a string we will split and reverse and then join.


import  {input}  from "../index.js";

const main = () =>{
    let str = input("Please enter the string value : ")
    if(str.length % 2==0){
        console.log(str.slice(0,(str.length/2)) , (str.slice((str.length)/2,str.length)).split('').reverse().join(''))
        if(str.slice(0,(str.length/2)) === (str.slice((str.length)/2,str.length)).split('').reverse().join('')){
            return true;
        }
    }else{
        if(str.slice(0,(str.length-1/2)-1) === str.slice((str.length+1)/2,str.length-1).reverse()){
            return true;
        }
    }
    return false;
}
console.log(main());