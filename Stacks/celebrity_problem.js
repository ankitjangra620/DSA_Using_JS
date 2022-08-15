// Q : celebrity problem

import { inputArr ,input} from "../index.js";

const main = () =>{
    let n=input("Please enter the value of n : ");
    let list=[],stack=[]
    for(let i=0;i<n;i++){
        list.push(inputArr(n));
        stack.push(i);
    }
    console.log('list',list);
    while(stack.length > 1){
        let a=stack.pop(),b=stack.pop();
        if(list[a][b]==1){
            stack.push(b)
        }else if(list[b][a]==1){
            stack.push(a);
        }
    }
    if(stack.length===0){
        return -1;
    }
    else{
        while(stack.length !== 0){
            let a= stack.pop();
            let oneCount=0;
            list.forEach(e => {
                if(e[a]==1) oneCount++;
            });
            console.log(oneCount === n-1,list[a].every(e=>e==0))
            if(list[a].every(e=>e==0) && oneCount == n-1){
                return a;
            }
        }
    }
    return -1;

}

console.log(main());