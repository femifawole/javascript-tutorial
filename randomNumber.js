function getRandomInt(min, max) {
    // Ensure min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomInt = getRandomInt(1, 1000);
console.log(randomInt); // Outputs a random integer between 1 and 10
