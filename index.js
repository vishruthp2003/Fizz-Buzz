/**
 * @param {number} n
 * @return {string[]}
 */


function fizzBuzz(n){
    var output = [];
    var i = 1;
    
    while (i <= n){
        if (i % 3 == 0 & i % 5 == 0) {
            output.push("FizzBuzz");
        }
        else if (i % 3 == 0) {
            output.push("Fizz");
        }
        else if (i % 5 == 0) {
            output.push("Buzz");
        }
        else {
            output.push(i.toString());
        }
        i++;
    }
    return output;
};
