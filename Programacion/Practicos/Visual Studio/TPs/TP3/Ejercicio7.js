const prompt = require(`prompt-sync`)();
let palabra,cont;
let palabras = [];
cont=0;

do {

    palabra = prompt("Ingrese una palabra (escriba fin para salir del programa)");
    if (palabra !== "fin") {
        palabras.push(palabra);
        cont=cont+1;
    }
    
} while (palabra !== "fin")
    console.log(`Palabras ingresadas: ${palabras.join(" - ")}
    Cantidad de palabras ingresadas: ${cont}`);