const fs = require('fs');

const inputFile = fs.readFileSync('input4.txt', 'utf8');
const lines = inputFile.split('\n');

let total = 0;



lines.forEach(line => {
    let winnerFound = 0;
    let points = 1;
    const nums = line.split(":")[1];
    const winners = nums.split("|")[0].split(" ").map(x => parseInt(x));
    const myNubmers = nums.split("|")[1].split(" ").map(x => parseInt(x));

    myNubmers.forEach(num => {
        const winner = winners.find(x => x === num);
        if (winner) {
            if (winnerFound) {
                points *= 2;
            } else {
                winnerFound = 1;
            }
        }
    });

    if(winnerFound) {
        total += points;
    }
})

console.log(total);
