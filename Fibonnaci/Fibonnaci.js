// import readline module
const readline = require("readline");
const { getSystemErrorMap } = require("util");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = 0;

// question user to enter name
rl.question("Please Enter a number\n", function (n) {

  console.log("Printing "+n+" Fibonnaci numbers");
  getNFibonnaciNumbers(n);
  // close input stream
  rl.close();
});

/**
 * Write a JavaScript program to get the first n Fibonacci numbers.
 * Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
 * Each subsequent number is the sum of the previous two.
 * 
 * @param {Integer} n UserInput to print n Fibonnaci Numbers
 */
function getNFibonnaciNumbers(n){
    let x = 0;
    let y = 1;
    if(1 <= n){
        console.log(0);
    }
    if(2 <= n ){
        console.log(1);
    }
    if(n >= 3){
        n = n-2;
        while(n > 0){
            let sum = x+y;
            console.log(sum);
            x = y;
            y = sum;
            n--;
        }
    }
}

