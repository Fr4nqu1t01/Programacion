/*Usa prompt() para pedir 10 números al usuario.
Cuenta cuántos son positivos, negativos y ceros. Muestra los resultados.*/

const prompt = require (`prompt-sync`)();
let usuario, num, positivos = 0, negativos = 0, ceros = 0;

for (let i = 0; i < 11; i++) {
    do {
    usuario = prompt("ingrese numeros: ");
    num = Number(usuario);
    if (isNaN(num)) {
        console.log("Caracter invalido. Intentalo denuevo");
    }
    } while (isNaN(num))
    if (num === 0) {
        ceros = ceros +1;
    } else if  (num > 0) {
        positivos = positivos +1;
    } else {
        negativos = negativos +1;
    }
}
console.log("numeros positivos:", positivos);
console.log("numeros negativos:", negativos);
console.log("ceros ingresador:", ceros);