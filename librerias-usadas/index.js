const paqueteSuma = require('2025a-swgr2-jdat-suma');
const paqueteResta = require('2025a-swgr2-jdat-resta');
const paqueteMultiplicacion = require('2025a-swgr2-jdat-multiplicacion');
const paqueteDivision = require('2025a-swgr2-jdat-division');

const respuestaSuma= paqueteSuma.suma(1, 2);
const respuestaResta = paqueteResta.resta(5, 3);
const respuestaMultiplicacion = paqueteMultiplicacion.multiplicacion(4, 2);
const respuestaDivision = paqueteDivision.division(8, 2);
const respuestaDivisionPorCero = paqueteDivision.division(8, 0);

console.log('La respuesta de la suma es: ', respuestaSuma);
console.log('La respuesta de la resta es: ', respuestaResta);
console.log('La respuesta de la multiplicación es: ', respuestaMultiplicacion);
console.log('La respuesta de la división es: ', respuestaDivision);
console.log('La respuesta de la división por cero es: ', respuestaDivisionPorCero);