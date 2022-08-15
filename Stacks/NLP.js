// Q : Find the next lowest possible value in list for each value?

// Note : The approach we are using here is to just traverse in reverse order in list and push to stack the element such that all element in right will be greater than this.
//        The idea behind this will be is to always have lowest element in right array

import {input, inputNumArr} from '../index.js'

export const nextGreaterElement = (nums1, nums2) => {
    let ans=[];
    let stack=[];
      for(let i of nums2.reverse()){
        console.log(stack)
            while(stack.length>=0 && i>=stack[stack.length-1]){
                stack.pop();
            }if(stack.length == 0){
                ans.push(-1);
            }
          else ans.push(stack[stack.length-1]);
          stack.push(i);
      }
      ans = ans.reverse();
      nums2=nums2.reverse();
      let realans=[];
      console.log(nums2)
      for(let i of nums1){
        console.log(nums2.indexOf(i))
         realans.push(ans[nums2.indexOf(i)])
      }
      console.log(realans)
};

export let NLP = (list)=>{
    list=list.reverse();
    let ans=[];
    let stack=[];
    for(let i of list){
        while(stack.length >= 0 && i <= stack[stack.length-1]){
            stack.pop();
        }
        if(stack.length === 0) ans.push(-1);
        else ans.push(stack[stack.length-1])
        stack.push(i);
    }
    return ans.reverse()
}

export let NLPR = (list)=>{
    let ans=[];
    let stack=[];
    for(let i of list){
        while(stack.length >= 0 && i <= stack[stack.length-1]){
            stack.pop();
        }
        if(stack.length === 0) ans.push(-1);
        else ans.push(stack[stack.length-1])
        stack.push(i);
    }
    return ans;
}



const main = () =>{
    // var length = input("Please enter the length of array : ")
    // let list = inputNumArr(length);
    // 
    console.log(NLP([0,2,0]))
}