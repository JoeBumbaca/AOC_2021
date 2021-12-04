const fs = require('fs');
const text = fs.readFileSync('./input1.txt', 'utf-8');
let input = text.split('\n').map(el => { return parseInt(el) });

// Part 1

const largerThanPrev = function(input) {
  
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    let next = input[i + 1];
    if (next > current) {
      count += 1;
    }
  }

  return count;
}

// console.log(largerThanPrev(input));

// Part 2

