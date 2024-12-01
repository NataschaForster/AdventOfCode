const { runInContext } = require("vm");

const fs = require("fs").promises;

fs.readFile("./input.txt", "utf8")
  .then((text) => {
    let leftArray = [];
    let rightArray = [];
    let totalDistance = 0;

    // split text into two arrays
    for (let line of text.split("\n")) {
      let numbers = line.split(" ").map(Number);
      leftArray.push(numbers[0]);
      rightArray.push(numbers[numbers.length - 1]);
    }

    // sort the arrays
    leftArray.sort((a, b) => a - b);
    rightArray.sort((a, b) => a - b);

    for (let i = 0; i < leftArray.length; i++) {
      const distance = Math.abs(leftArray[i] - rightArray[i]);
      totalDistance += distance;
    }
    console.log(totalDistance); 

    //  part 2
      let similarityScore = 0;
      for (let i = 0; i < leftArray.length; i++) {
          currentNumber = leftArray[i];
          let count = 0
          for (let j = 0; j < rightArray.length; j++) {
              if (currentNumber === rightArray[j]) {
                  count++;
              }
          }
          similarityScore += count * currentNumber;
        }
        console.log(similarityScore)
  })
  .catch((err) => {
    console.error(err);
  });
