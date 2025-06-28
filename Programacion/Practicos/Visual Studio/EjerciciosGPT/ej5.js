const prompt = require(`prompt-sync`)();

let usuario, num, multiplicacion;

do {
usuario = prompt("Ingrese un numero: ");
num = Number(usuario);
if (isNaN(num) || num === 0) {
    console.log("Caracter invalido o igual a cero. Intentelo denuevo.");
}
} while (isNaN(num) || num === 0)

for (let i = 0; i <= 10; i++) {
    multiplicacion = num * i;
    console.log(multiplicacion);
}