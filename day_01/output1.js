const fs = require('fs');
const text = fs.readFileSync('./input1.txt', 'utf-8');
let input = text.split('\n').map(el => { return parseInt(el) });

