// Q: Get the minimum values of the array using stack in O(1)

import {input} from '../index.js'

const main=()=>{
    let length = input("Please enter the length of the array : ");
    let list=[];
    let stack=[];
    for(let i =0 ;i<length ; i++){
        list.push(input(`Enter the ${i}th element : `));
        if(stack.length==0){
            stack.push(list[list.length-1])
        }
        else if(stack[stack.length-1] > list[list.length-1]){
            stack.push(list[list.length-1]);
        }
    }
    return stack.length > 0 ? stack[stack.length-1] : -1;

}

console.log(main())