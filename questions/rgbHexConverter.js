/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
  try {
    if (rgbValues.length > 3) {
      throw new Error("Invalid Input - More than 3 Numbers");
    } else if (rgbValues.length < 4) {
      let result;
      rgbValues.forEach((val) => {
        if (typeof val !== "number") {
          throw new Error("Invalid Input - String Detected");
        } else if (val > 255) {
          throw new Error("Invalid Input - Greater than 255");
        } else {
          let red = Number(rgbValues[0]).toString(16);
          let green = Number(rgbValues[1]).toString(16);
          let blue = Number(rgbValues[2]).toString(16);
          if (red.length < 2) {
            red = "0" + red;
          }
          if (green.length < 2) {
            green = "0" + green;
          }
          if (blue.length < 2) {
            blue = "0" + blue;
          }
          result = "#" + red + green + blue;
        }
      });
      return result;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = rgbToHexConversion;
