// Q : Implement balance of paranthesis with the help of stacks
import {input} from '../index.js'

function main(){
    console.log("Starting Main");
    let list =[];
    let str = input("Please provide string to be balanced ");
    console.log(str);
    for(let i of str){
        console.log(i,list)
        if(['(','{','['].some(e=> e===i))list.push(i);
        else if([')','}',']'].some(e=> e===i)){
            let obj={
                ')':'(',
                '}':'{',
                ']':'['
            }
            if(list[list.length-1] != obj[i]){
                return "Paranthesis is not balanced. "
            }
            else{
                list.pop();
            }
        }
    }
    return list.length === 0 ? "Paranthesis is balanced." : "Paranthesis is not balances."
}

console.log(main());