const convertToCelsius = function (temperatueInFahren) {
  return +((temperatueInFahren - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function (temperatueInCelsius) {
  return +((temperatueInCelsius * 9) / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
