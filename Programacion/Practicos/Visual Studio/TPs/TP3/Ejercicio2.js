const prompt = require(`prompt-sync`)();

let palabra;
let palabraIngresada = [];

while (palabra !== "cancelar") {
    palabra = prompt("Ingrese una palabra (ingrese cancelar para salir)");
    if (palabra !== "cancelar") {
        palabraIngresada.push(palabra);
    }
}
console.log(`Fin del programa.`);
console.log(`Palabras ingresadas: ${palabraIngresada.join(" - ")}`);