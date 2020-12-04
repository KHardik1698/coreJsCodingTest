/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
  // all your code
  try {
    if (numbers.length == 0) {
      throw new Error("Invalid Input - No Input");
    } else if (numbers.length !== 0) {
      let result;
      numbers.forEach((num) => {
        if (typeof num !== "number") {
          throw new Error("Invalid Input- String Detected");
        } else {
          result = numbers.reduce((sum = 0, num) => {
            sum = sum + num;
            return sum;
          });
        }
      });
      return result;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = addition;
