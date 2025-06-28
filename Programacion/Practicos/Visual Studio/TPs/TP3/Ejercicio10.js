
const prompt = require(`prompt-sync`)();

let nota, num, notas = [];
let promedio, Cnotas = 0, Snotas = 0, promedio7, Cnotas7 = 0, Snotas7 = 0;

while (nota !== "fin"){
    nota = prompt("Ingrese la nota del alumno (Ingrese fin para dejar de ingresar notas):");
    num = Number(nota);
    if (!isNaN(num) && num <= 10) {
        notas[Cnotas] = num
        Cnotas = Cnotas+1;
        Snotas = Snotas + num;
    if (nota >= 7) {
        Snotas7=Snotas7+num;
        Cnotas7=Cnotas7+1;
      }
    } else {
        console.log("Caracter o valor invalido. intentelo denuevo (nota menor o igual a 10)")
    }
}

promedio = Snotas/Cnotas;
promedio7 = Snotas7/Cnotas7;

console.log(`El promedio de las notas mayores a 7 es: ${promedio7.toFixed(2)}. El promedio de todas las notas es: ${promedio.toFixed(2)}`);