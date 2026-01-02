const convertToCelsius = function(x) {
  x = (5/9) * (x-32)
  return Math.round(x * 10) / 10
};

const convertToFahrenheit = function(x) {
  x = (x*1.8) + 32
  return Math.round(x*10) /10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
