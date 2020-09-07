// Kelvin (base unit of temperature) is 239 K
const kelvin = 0;
// Converting Kelvin into celsius
var celsius = kelvin - 273;

var newton = celsius * (33/100);
newton = Math.floor(newton);
// Converting celsius into fahrenheit
var fahrenheit = celsius * (9/5) + 32;
// Removing decimal number from conversion
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);