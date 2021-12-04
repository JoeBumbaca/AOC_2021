const fs = require('fs');
const text = fs.readFileSync('./input2.txt', 'utf-8');
let input = text.split('\n').map((data) => {
  let arr = [];
  let parts = data.split(" ");
  arr.push(parts[0], parseInt(parts[1]))
  return arr;
})

// console.log(input);

//Part 1

const finalDepth = (data) => {
  let pos = [0,0];

  data.forEach(datum => {

    switch(datum[0]){
      case 'forward':
        pos[0] += datum[1];
        break;
      case 'down':
        pos[1] += datum[1];
        break;
      case 'up':
        pos[1] -= datum[1];
        break;
      default:
        break;
    }
  })

  return pos[0] * pos[1]
}

// console.log(finalDepth(input))

// Part 2

const finalDepth2 = (data) => {
  let pos = [0,0,0];

  data.forEach(datum => {

    switch(datum[0]){
      case 'forward':
        pos[0] += datum[1];
        pos[1] += (pos[2] * datum[1])
        break;
      case 'down':
        pos[2] += datum[1];
        break;
      case 'up':
        pos[2] -= datum[1];
        break;
      default:
        break;
    }
  })

  return pos[0] * pos[1]
}

// console.log(finalDepth2(input));