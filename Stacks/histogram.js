import { NLP,NLPR } from "./NLP.js";
// Q : Find the maximum area histogram by given area
// 1. Find NGE in front array and back array
// 2. 


const main = () =>{
    const list = [2,1,5,6,2,3]
    let front = NLP([2,1,5,6,2,3]);
    let back = NLPR([2,1,5,6,2,3]);
    for(let i=0;i<front.length;i++){
        console.log(list.slice(i,list.length).indexOf(front[i])+i)
        front[i]=front[i]==-1 ? -1 :list.slice(i,list.length).indexOf(front[i])+i;
    }
    for(let i=0;i<back.length;i++){
        back[i]=back[i]==-1 ? -1 :i - list.slice(0,i+1).reverse().indexOf(back[i]);
    }
    console.log(front,back)
    let width=[];
    for(let i = 0 ;i<list.length; i++){
        width.push(((front[i]==-1 ? list.length-i : front[i]-i) + (back[i]== -1 ? i : i-back[i]-1))*list[i])
    }
    console.log(width)
    return Math.max(...width);
}
console.log(main());