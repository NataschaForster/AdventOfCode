const fs = require("fs").promises;

const regex = /mul\(\d{1,3},\d{1,3}\)/g;
let result = 0

fs.readFile("./input.txt", "utf8").then((text) => {
    const correctMultiplications = text.match(regex);

    for (let i = 0; i < correctMultiplications.length; i++) {
        correctMultiplications[i] = correctMultiplications[i].replace("mul(", "");
        correctMultiplications[i] = correctMultiplications[i].replace(")", "");
        const numbers = correctMultiplications[i].split(",");
        result += Number(numbers[0]) * Number(numbers[1]);
    }
  console.log(result);
});
