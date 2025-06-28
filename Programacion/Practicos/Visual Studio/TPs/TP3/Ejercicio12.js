/*12) Realiza un script que dado una lista de números. Solicite un otro número al usuario e indique si 
el número se encuentra en la lista.*/

const prompt = require(`prompt-sync`)();

let usuario = "";
let numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let num = 0;


do {
     usuario = prompt ("Ingrese numeros. escriba fin para salir: ");
     if (usuario !== "fin"){
        if (usuario !== isNaN){
          num = Number(usuario);
        } 
        if (numeros.includes(num)) {
            console.log("El numero ingresado ya esta dentro de la lista.");
        }
    }
} while (usuario !== "fin")