const paqueteSuma = require('2025a-swgr2-jdat-suma');
const paqueteResta = require('2025a-swgr2-jdat-resta');
const paqueteMultiplicacion = require('2025a-swgr2-jdat-multiplicacion');
const paqueteDivision = require('2025a-swgr2-jdat-division');

const respuestaSuma= paqueteSuma.suma(2, 1);
const respuestaResta = paqueteResta.resta(3, 2);
const respuestaMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);
const respuestaDivision = paqueteDivision.division(9, 3);
const respuestaDivisionPorCero = paqueteDivision.division(8, 0);

console.log('La respuesta de la suma es: ', respuestaSuma);
console.log('La respuesta de la resta es: ', respuestaResta);
console.log('La respuesta de la multiplicación es: ', respuestaMultiplicacion);
console.log('La respuesta de la división es: ', respuestaDivision);
console.log('La respuesta de la división por cero es: ', respuestaDivisionPorCero);