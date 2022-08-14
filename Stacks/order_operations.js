// Q : 1,2,3,4,5,6 will be pushed in order from left to right, find out S and X pattern to 325641;

import {input} from "../index.js"
let output = '146523'
const main= ()=>{
    let list=[],result="";
    for(let i=1;i<=6;i++){
        console.log(list,result,output,i)
        if(i<output[output.length-1]){
            list.push(i);
            result+='S';
        }
        else if(i== output[output.length-1]){
            list.push(i)
            result+='S';
            while(list.length > 0 && output.length>0 && list[list.length-1] == output[output.length-1]){
                list.pop()
                output = output.slice(0,output.length-1);
                console.log(output)
                result+='X';
            }
        }
        else{
            console.log("error this permutation can't be done");
            return;
        }
    }
    return result;
}
console.log(main())