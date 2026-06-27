const prompt = require (`prompt-sync`)();

let tunombre = "lhjasfjhsdkjjb";

let tieneNumero = false;

for (let i = 0; i < tunombre.length; i++) {
    let caracter = tunombre[i];
    // Detectar si caracter es número y no espacio
    if (!isNaN(caracter) && caracter !== ' ') {
        tieneNumero = true;
        break;
    }
}
if (tieneNumero) {
    console.log("La palabra contiene numeros.");
} else {
    console.log("La palabra no contiene numeros.");
}
console.log(tieneNumero);  // true (porque '3' es número)*/