import prompt from 'prompt-sync'

const p= prompt();

export function input(str = "Please provide required input : "){
    let ans = p(str);
    return ans;
}
