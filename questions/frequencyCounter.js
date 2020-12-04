/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
  let vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  try {
    if (typeof str == "number") {
      throw new Error("Invalid Input - Number Detected");
    } else {
      strArr = str.split("");
      strArr.forEach((letter) => {
        if (letter.includes("a")) {
          vowels.a++;
        } else if (letter.includes("e")) {
          vowels.e++;
        } else if (letter.includes("i")) {
          vowels.i++;
        } else if (letter.includes("o")) {
          vowels.o++;
        } else if (letter.includes("u")) {
          vowels.u++;
        }
      });
      return vowels;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = frequencyCounter;
