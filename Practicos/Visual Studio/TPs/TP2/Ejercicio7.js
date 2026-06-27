/*7. Realiza un diagrama de flujo que dado 3 números, muestre por pantalla cual es menor, cual
es mayor y cual está entremedio de los otros dos. Dado el diagrama construido realiza un 
programa que materialice lo diseñado en el diagrama.*/

let num1, num2, num3;

num1 = 2;
num2 = 1;
num3 = 3;

console.log("VALORES DE LOS NUMEROS:");
console.log("num1:", num1);
console.log("num2:", num2);
console.log("num3:", num3);

if (num1 > num2 && num1 > num3) {

    if (num2 > num3) {

        console.log("num1 es el MAYOR");
        console.log("num3 es el MENOR");
        console.log("num2 es el ENTREMEDIO");

    } else {

        console.log("num1 es el MAYOR");
        console.log("num2 es el MENOR");
        console.log("num3 es el ENTREMEDIO");

    }
} 

if (num2 > num1 && num2 > num3) {

    if (num1 > num3) {

        console.log("num2 es el MAYOR");
        console.log("num3 es el MENOR");
        console.log("num1 es el ENTREMEDIO");

    } else {

        console.log("num2 es el MAYOR");
        console.log("num1 es el MENOR");
        console.log("num3 es el ENTREMEDIO");

    }
}

if (num3 > num1 && num3 > num2) {

    if (num1 > num2) {

        console.log("num3 es el MAYOR");
        console.log("num2 es el MENOR");
        console.log("num1 es el ENTREMEDIO");

    } else {

        console.log("num3 es el MAYOR");
        console.log("num1 es el MENOR");
        console.log("num2 es el ENTREMEDIO");

    }
}