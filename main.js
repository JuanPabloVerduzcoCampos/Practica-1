const { toCelsius } = require('celsius'); // En este apartado solo tomamos el codigon que se enccuentra en el apartado de celsius
const { toFahrenheit } = require('celsius'); // En este apartado solo tomamos el codigon que se enccuentra en el apartado de Fahrenheit
const temp = require ('celsius'); // A diferencia del de los otros const, con ese mandamos a llamar todo lo que se encuentre en el archivo "celsius", para poder mandar a llamar solo lo que busquemos.

console.log("Celsius");// Etiquetas distintiva
console.log(toCelsius(100)); // 38                  Con toCelsius solo se manda a llamar las converciones de celsius, las cuales pedimos el require de ese codigo en la linea 1.
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

console.log("Fahrenheit");// Etiquetas distintiva
console.log(toFahrenheit(36)); // 97                 Con toFahrenheit solo se manda a llamar las converciones de Fahrenheit, las cuales pedimos el require de ese codigo en la linea 2.
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380+

console.log("Celsius");// Etiquetas distintiva
console.log(temp.toCelsius(20));
console.log("Fahrenheit");// Etiquetas distintiva
console.log(temp.toFahrenheit(30));