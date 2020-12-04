/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  try {
    if (typeof seconds !== "number") {
      throw new Error("Invalid Input - String Detected");
    } else {
      time.hours = Math.floor((seconds / 3600) % 60);
      time.minutes = Math.floor((seconds / 60) % 60);
      time.seconds = Math.floor(seconds % 60);
      return time;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = convertTime;
