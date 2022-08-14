// Q : reverse a stack with only using single stack and its operations

import {input} from '../index.js'

var list  =  [1,2,3,4,5,6,7]

const main = () =>{
    let data;
    if(list.length == 0){
        return;
    }
    else{
        data=list[0];
        list.reverse().pop();
        list.reverse();
        main();
        list.push(data);
        console.log(list)
    }
}

console.log(main());