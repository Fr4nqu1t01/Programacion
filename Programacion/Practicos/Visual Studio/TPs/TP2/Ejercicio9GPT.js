let num1 = 10;
let num2 = 15;
let num3 = 100;
let num4 = 0;

let suma = num1 + num2 + num3 + num4;
let multiplicacion = num1 * num2 * num3 * num4;

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

if (sumaEsMayor && multiplicacionEsMenor) {
    console.log(`La suma es mayor a 30. Es: ${suma}`);
    console.log(`La multiplicacion es menor a 400. Es: ${multiplicacion}`);
    console.log(`AMBAS condiciones se cumplieron`);
} else if (!sumaEsMayor && !multiplicacionEsMenor) {
    console.log(`La suma NO es mayor a 30. Es: ${suma}`);
    console.log(`La multiplicacion NO es menor a 400. Es: ${multiplicacion}`);
    console.log(`Ninguna de las dos condiciones se cumplió (Suma > 30 y multiplicacion < 400).`);
} else if (sumaEsMayor && !multiplicacionEsMenor) {
    console.log(`La suma es mayor a 30. Es. ${suma}`);
    console.log(`La multiplicacion NO es menor a 400. Es: ${multiplicacion}`);
    console.log(`La suma es MAYOR a 30, pero la multiplicacion NO ES MENOR a 400`);
} else if (!sumaEsMayor && multiplicacionEsMenor) {
    console.log(`La suma NO es mayor a 30. Es: ${suma}`);
    console.log(`La multiplicacion es menor a 400. Es: ${multiplicacion}`);
    console.log(`La suma NO ES MAYOR a 30, pero la multiplicacion es MENOR a 400`);
}
