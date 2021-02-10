// A function to take a temperature and measurement type (Kelvin, Celsius, or Fahrenheit) and output the values of the
// converted temperatures
const convertTemperature = function (temp, measurement) {
  // Variables for the temperature conversion logic
  const kConvertedToC = (temp - 273) + ' degrees Celsius';
  const kConvertedToF = (temp - 273) * (9/5) + 32 + ' degrees Fahrenheit';
  const fConvertedToC = (temp - 32) * 5/9 + ' degrees Celsius';
  const fConvertedToK = (temp -32) * 5/9 + 273 + ' degrees Kelvin';
  const cConvertedToK = (temp + 273) + ' degrees Kelvin';
  const cConvertedToF = (temp * 9/5) + 32 + ' degrees Fahrenheit.';

  // If..Else logic to determine which temperature conversion variable's logic should be used
  // .toLowerCase ensures that the program can run even if the user uses an upper case while calling the function
  if (measurement.toLowerCase() === 'k' || measurement.toLowerCase() === 'kelvin') {
    return `${temp}${measurement} is ${kConvertedToC} and ${kConvertedToF}.`;
  } else if (measurement.toLowerCase() === 'f' || measurement.toLowerCase() === 'fahrenheit') {
    return `${temp}${measurement} is ${fConvertedToC} and ${fConvertedToK}.`;
  } else if (measurement.toLowerCase() === 'c' || measurement.toLowerCase() === 'celsius') {
    return `${temp}${measurement} is ${cConvertedToK} and ${cConvertedToF}.`;
  } else {
    return "Invalid entry."
  }
}

// Print the results of the function using arguments of 293, and 'K'
console.log(convertTemperature(293, 'k'));