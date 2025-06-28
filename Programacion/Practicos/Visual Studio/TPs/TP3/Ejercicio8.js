const prompt = require(`prompt-sync`)();
let usuario = prompt("Ingrese un numero para hacer una piramide");
let num = Number(usuario);
let P = "";
while (num < 1 || isNaN(num) || num > 50) {
  num = Number(prompt("Caracter o valor invalido. Ingrese un numero entre 1 y 50: "));
}
for (let i = 1; i <= num; i++) {
  P = P + ` ${i}`;
  console.log(P);
}