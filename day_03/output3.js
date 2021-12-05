const fs = require('fs');
const text = fs.readFileSync('./input3.txt', 'utf-8');
let input = text.split('\n');

// console.log(input);

// Part 1

const powerConsumption = (data) => {
  const counts = {1: 0, 0: 0};
  const gamma = [];
  const epsilon = [];

  for (let i = 0; i < data[0].length; i++) {
    data.forEach(datum => {
      datum[i] === '0' ? counts[0] += 1 : counts[1] += 1;
    })
     if (counts[0] > counts[1]) {
      gamma.push(0);
      epsilon.push(1);
    } else {
      gamma.push(1);
      epsilon.push(0)
    }

    counts[1] = 0;
    counts[0] = 0;
  }
  

  const gammaInt = parseInt(gamma.join(''), 2);
  const epsilonInt = parseInt(epsilon.join(''), 2);

  return gammaInt * epsilonInt;
};

// console.log(powerConsumption(input));

// Part 2

const o2Rating = (data, idx) => {
  const counts = {1: 0, 0: 0};
  let newData;
    data.forEach(datum => {
      datum[idx] === '0' ? counts[0] += 1 : counts[1] += 1;
  })
  if (counts[0] > counts[1]) {
    newData = data.filter(datum => {
      return datum[idx] === '0';
    })
  } else {
    newData = data.filter(datum => {
      return datum[idx] === '1';
    })
  }

  if (newData.length > 1) {
    return o2Rating(newData, (idx + 1));
  } else {
    return parseInt(newData[0], 2);
  }
};

const cO2Rating = (data, idx) => {
  const counts = {1: 0, 0: 0};
  let newData;
    data.forEach(datum => {
      datum[idx] === '0' ? counts[0] += 1 : counts[1] += 1;
  })
  if (counts[0] > counts[1]) {
    newData = data.filter(datum => {
      return datum[idx] === '1';
    })
  } else {
     newData = data.filter(datum => {
      return datum[idx] === '0'
    })
  }

  if (newData.length > 1) {
    return cO2Rating(newData, (idx + 1));
  } else {
    return parseInt(newData[0], 2);
  }
};

const lifeSupportRating = (o2Rating(input, 0) * cO2Rating(input, 0));
// console.log(lifeSupportRating);


