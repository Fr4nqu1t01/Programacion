/* 9. Como modificarías el ejercicio anterior para que indique específicamente cual de las dos 
condiciones no se cumplieron (suma o multiplicación) o si no se cumplió ninguna de las 2 */

let num1 = 10;

let num2 = 15;

let num3 = 1;

let num4 = 23;

let suma = num1+num2+num3+num4;

let multiplicacion = num1*num2*num3*num4;

let sumaEsMayor, multiplicacionEsMenor;

if (suma > 30) {

     sumaEsMayor = true;

} else {

     sumaEsMayor = false;

}

if (multiplicacion < 400) {

     multiplicacionEsMenor = true;

} else {

     multiplicacionEsMenor = false;

}

if (sumaEsMayor) {

    console.log("La suma es mayor a 30. Es:", suma);

} else {

    console.log("La suma NO es mayor a 30. Es:", suma);

}

if (multiplicacionEsMenor) {

    console.log("La multiplicacion es menor a 400. Es:", multiplicacion);

} else {

    console.log("La multiplicacion NO es menor a 400. Es:", multiplicacion);

}

if (sumaEsMayor && multiplicacionEsMenor) {

    console.log("AMBAS condiciones se cumplieron");

}

if (!sumaEsMayor && !multiplicacionEsMenor) {

    console.log("Ninguna de las dos condiciones se cumplió (Suma > 30 y multiplicacion < 400).");

} else if (sumaEsMayor && !multiplicacionEsMenor) {

    console.log("La suma es MAYOR a 30, pero la multiplicacion NO ES MENOR a 400");

} else if (!sumaEsMayor && multiplicacionEsMenor) {
    
    console.log("La suma NO ES MAYOR a 30, pero la multiplicacion es MENOR a 400");

}