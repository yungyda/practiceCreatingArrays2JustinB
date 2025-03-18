// Task 1: Initialize the Array
let greetingsArray = new Array(7).fill("Hello");

// Log the array to confirm all slots contain "Hello"
console.log("Task 1 - Initial Array:", greetingsArray);

// Task 2: Update the Array
// Fill only part of the array with "Hi" (Changing first 3 elements)
greetingsArray.fill("Hi", 0, 3);

// Log the updated array
console.log("Task 2 - Partially Updated Array:", greetingsArray);

// Task 3: Populate the Array with a for Loop
let numberArray = new Array(5); // Create an array with 5 slots

// Use a for loop to assign index * 10 to each slot
for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] = i * 10;
}

// Log the final array
console.log("Task 3 - Number Array:", numberArray);
