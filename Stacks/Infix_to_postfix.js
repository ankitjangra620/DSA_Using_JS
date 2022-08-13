// Q :  WAP to convert the infix expression into postfix expression 

// tip : the operator with the higher priority will come first.


//test: A*B-(C+D)+E
import {input} from '../index.js'

const find_priority=(op)=>{
    let obj={
        'function':17,
        'array':17,
        'structOrUnion':17,
        '--':16,
        '++':16,
        '*':13,
        '/':13,
        '%':13,
        '+':12,
        '-':12,
        '<<':11,
        '>>':11,
        '>':10,
        '>=':10,
        '<':10,
        '<=':10,
        '==':9,
        '!=':9,
        '&':8,
        '^':7,
        '|':6,
        '&&':5,
        '||':4,
        ',':1
    }
    return obj[op] || 0;
}

const main = () =>{
    console.log("Starting Main");
    let list =[],
    output="",
    str = input ("Please provide the input : ");
    for(let i of str){
        if(i.match(/^[a-zA-Z0-9]+$/)){
            output+=i;
            console.log(1,list,output);
        }else if(i === ')'){
            while(list.length !=0 && list[list.length-1] != '('){
                output+=list.pop();
            }
            console.log(2,list,output)
            list.pop();
        }
        else{
            console.log("operator!!!!");
            console.log(find_priority(i),find_priority(list[list.length-1]))
            if(i != '('){
                while(list.length !=0 && list[list.length-1] !='(' && find_priority(i) <= find_priority(list[list.length-1])){
                    console.log(list.length)
                    output+=list.pop();
                }
            }
            list.push(i);
            console.log(3,list,output)
        }
    }
    while(list.length !== 0){
        output+=list.pop();
    }
    return output;

}
console.log(main());