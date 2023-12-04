const fs = require('fs');

const inputFile = fs.readFileSync('input4.txt', 'utf8');
const lines = inputFile.split('\n');

let total = 0;

function isAdjacentToSymbol(x, y, numLength, lines) {
    const symbols = '*/@$&#+=%-';

    for (let dx = -1; dx <= numLength; dx++) {
        for (let dy = -1; dy <= 1; dy++) {

            if (dx === 0 && dy === 0) continue;

            const nx = x + dx;
            const ny = y + dy;

            if (ny >= 0 && ny < lines.length && nx >= 0 && nx < lines[ny].length) {
                if (symbols.includes(lines[ny][nx])) {
                    return true;
                }
            }
        }
    }
    return false;
}

for (let y = 0; y < lines.length; y++) {
    let matches;
    const regex = /\d+/g;

    while ((matches = regex.exec(lines[y])) !== null) {
        const x = matches.index;
        const number = parseInt(matches[0], 10);
        console.log(number);
        if (isAdjacentToSymbol(x, y, Math.floor(Math.log10(number) + 1), lines)) {
            total += number;
        }
    }
}

console.log(total);
