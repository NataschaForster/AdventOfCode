const fs = require("fs").promises;

/**
 * Checks if two numbers are in ascending or descending order and are within 4 of each other.
 */
const areNumbersAscending = (numberA, numberB) => {
  if (numberA < numberB && numberA > numberB - 4) {
    return true;
  } else if (numberA > numberB && numberA - 4 < numberB) {
    return false;
  }
};

let amountOfSafeLevels = 0;
let gradients = [];

fs.readFile("./input.txt", "utf8").then((text) => {
  for (let line of text.split("\n")) {
      numbers = line.split(" ");

    for (let i = 0; i < numbers.length - 1; i++) {
      gradients.push(areNumbersAscending(numbers[i], numbers[i + 1]));
    }
    console.log(gradients);
    if (gradients.every((gradient) => gradient === gradients[0])) {
      amountOfSafeLevels += 1;
    }
    gradients = [];
  }
  console.log(amountOfSafeLevels);
});
