const fs = require('fs');
const text = fs.readFileSync('./input1.txt', 'utf-8');
let input = text.split('\n').map(el => { return parseInt(el) });

// Part 1

const numLargerThanPrev = function(data) {
  
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    let current = data[i];
    let next = data[i + 1];
    if (next > current) {
      count += 1;
    }
  }

  return count;
}

// console.log(numLargerThanPrev(input));

// Part 2
// const arr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const add = (prev, curr) => prev + curr;

const threeSumIncrease = function(data) {

  let count = 0;
  let currSum;
  for (let i = 0; i < data.length; i++) {
    if (i + 3 > data.length) {
      break;
    } else {
      let window = data.slice(i, i+3);
      if (currSum) {
        let nextSum = window.reduce(add, 0);
        if (nextSum > currSum) {
          count += 1;
          currSum = nextSum;
        } else {
          currSum = nextSum;
        }
      } else {
        currSum = window.reduce(add, 0);
      }
    }
  }
  return count;
};

// console.log(threeSumIncrease(input));