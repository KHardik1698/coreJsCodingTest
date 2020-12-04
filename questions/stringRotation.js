const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando
  let result = "";
  try {
    if (str == null || n == null || direction == null) {
      throw new Error("Invalid Input - No Input");
    } else if (direction !== "right" && direction != "left") {
      throw new Error("Invalid Input - Invalid Direction");
    } else if (direction == "right") {
      for (i = n; i > 0; i--) {
        result = result + str[str.length - i];
      }
      result = result + str.substring(0, str.length - n);
      return result;
    } else if (direction == "left") {
      result = result + str.substring(n, str.length);
      for (i = 0; i < n; i++) {
        result = result + str[i];
      }
      return result;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = rotateString;
