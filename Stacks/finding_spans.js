// Q : Find the maximum number of days in which stock value was increasing 

import {input} from '../index.js'

let list = [
    {6:1},{3:1},{4:2},{5:3},{2:1}
]

const main = () =>{
    list = list.reverse();
    console.log(list);
    let max=0;
    let stack = [];
    for(let i of list){
        if(stack.length === 0){
            stack.push(Number(Object.keys(i)[0]));
        }else{
            console.log(Number(Object.keys(i)[0]) , stack[stack.length-1])
            if(Number(Object.keys(i)[0]) <= stack[stack.length-1] ){
                stack.push(Number(Object.keys(i)[0]));
                console.log(stack);
            }
            else{
                console.log(stack)
                if(max<stack.length) max= stack.length;
                stack=[];
                stack.push(Number(Object.keys(i)[0]))
            }
        }
    }
    console.log(max);
}

console.log(main())