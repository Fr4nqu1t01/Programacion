const ej1 = () =>{ 
    const prompt = require("prompt-sync")();

const prohibidas = ["hola", "chau"];

const usuario = prompt("Ingrese una frase: ");

const separacion = usuario.split(" ");

const array = separacion.filter(palabra => !prohibidas.includes(palabra));

console.log(`
Palabras prohibidas: ${prohibidas}

Palabras ingresadas: ${separacion}

Palabras luego del filtro aplicado: ${array}
`);
}