const fs = require('fs');

const inputFile = fs.readFileSync('input4.txt', 'utf8');
const lines = inputFile.trim().split('\n');

// Parsing the games from the input
let games = lines.map((line) => {
    let [winningNumbers, playerNumbers] = line.split("|").map(part =>
        part.trim().split(/\s+/).map(num => parseInt(num)).filter(num => !isNaN(num))
    );
    return [winningNumbers, playerNumbers];
});

let multiTable = Array(games.length).fill(1); // Initialize the multiTable

for (let i = 0; i < games.length; i++) {
    const filteredArray = games[i][1].filter(value => games[i][0].includes(value));
    
    for (let j = 0; j < filteredArray.length; j++) {
        if (i + j + 1 < games.length) {
            multiTable[i + j + 1] += multiTable[i];
        }
    }
}

let total = multiTable.reduce((partialSum, a) => partialSum + a, 0);

console.log(`Total number of scratchcards: ${total}`);
