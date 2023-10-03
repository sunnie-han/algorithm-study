const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    for(const char of str) {
        if (char == char.toLowerCase()) {
            answer += char.toUpperCase();
        } else {
            answer += char.toLowerCase();
        }
    }
    console.log(answer);
});