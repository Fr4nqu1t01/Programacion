const prompt = require(`prompt-sync`)();

let lista = [2,3,4,7,9,10,1];
let usuario, num, encontrado = false;
do {
usuario = prompt("ingrese un numero: ");
num = Number(usuario);
if (isNaN(num)) {
    console.log("Caracter invalido. Ingrese un valor numerico.");
}
} while (isNaN(num))
for (let i = 0; i < lista.length; i++) {
    if (lista[i] === num) {
        encontrado = true;
        break
    }
}
if (encontrado) {
    console.log("El numero ingresado esta dentro de la lista.");
} else {
    console.log("El numero ingresado no esta dentro de la lista.");
}