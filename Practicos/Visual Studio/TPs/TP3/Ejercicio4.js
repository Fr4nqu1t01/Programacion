const prompt = require(`prompt-sync`)();
let pregunta, num;
pregunta = prompt("Ingrese un numero:");
num = parseInt(pregunta);
if (num > 0) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}else {
    console.log("Fin del programa. El numero ingresado no puede ser menor a 0");
}
