import prompt from 'prompt-sync'

const p= prompt();

export function input(str = "Please provide required input : "){
    let ans = p(str);
    return ans;
};

export function inputNumArr(length = 0 , str="Please enter the input elements :") {
    let ans =[];
    for(let i=0 ;i<length;i++){
        ans.push(Number(p(`Please enter the ${i+1}th value : `)));
    }
    return ans;
}

export function inputArr(length = 0 , str="Please enter the input elements :") {
    let ans =[];
    for(let i=0 ;i<length;i++){
        ans.push(p(`Please enter the ${i+1}th value : `));
    }
    return ans;
}