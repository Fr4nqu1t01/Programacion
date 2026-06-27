const prompt = require('prompt-sync')();
let numero;

do {
    numero = prompt(`Ingrese un numero cualquiera (Ingrese 0 para salir del programa)`);
    num = parseInt(numero);
    console.log(`El numero ingresado es: ${num}`);
} while (numero != 0)
console.log("Fin del programa. El numero ingresado es 0.");