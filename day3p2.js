const fs = require('fs');

const inputFile = fs.readFileSync('input3.txt', 'utf8');
const lines = inputFile.split('\n');

let total = 0;

function getNumberFromIndex(x, line) {
    let number = [];
    let i = x;
    while (!isNaN(line[i - 1])) {
        i--;
    }

    while (!isNaN(line[i])) {
        number.push(line[i]);
        i++;
    }

    return parseInt(number.join(''), 10);
}

const getGearNumber = (x, y, lines) => {
    total = 1;

    let numCount = 0;
    let lastCharWasNumber = false;
    for(let dy = -1; dy <= 1; dy++) {
        lastCharWasNumber = false;
        for(let dx = -1; dx <= 1; dx++) {
            if(!isNaN(lines[y + dy][x + dx])) {
                if (!lastCharWasNumber) {
                    numCount++;
                    total *= getNumberFromIndex(x + dx, lines[y + dy]);
                    lastCharWasNumber = true;
                }
            } else {
                lastCharWasNumber = false;
            }
        }
    }

    return numCount == 2 ? total : 0;
};

for (let y = 0; y < lines.length; y++) {
    let matches;
    const regex = /\*+/g;

    while ((matches = regex.exec(lines[y])) !== null) {
        const x = matches.index;
        total += getGearNumber(x, y, lines);
    }
}

console.log(total);