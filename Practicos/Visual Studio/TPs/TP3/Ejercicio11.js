/*11) Realiza un script que invierta los datos de un arreglo.*/
const prompt = require(`prompt-sync`)();
let usuario = "";
let datos = [];

do {
    usuario = prompt("Ingresar datos. Ingrese fin para terminar: ");

    datos.push(usuario);
} while (usuario !== "fin")
for (let i = 0; i < (datos.length - 1); i++) {
    console.log(datos[i]);
}