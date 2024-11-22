/* 
Write a function that returns "rock, paper, or scissors".
    Define function named returnElement.
        Define a variable element that stores a number generated by the Math.random method.
        Create a conditional statement that returns rock if Math.random returns a value that is greater than 0 and less than or equal to 0.33.
            Elseif Math.random returns a value that is greater than 0.33 and less than or equal to 0.66, return paper.
            Else if any other value is returned, return scissors.
    */

function returnElement() {
    let element = Math.random();
    if (element >= 0 && element <= 0.33) { 
        return "rock";
    } else if (element > 0.33 && element <= 0.66) {
       return "paper";
    } else {
        return "scissors";
    }
}
console.log(returnElement())