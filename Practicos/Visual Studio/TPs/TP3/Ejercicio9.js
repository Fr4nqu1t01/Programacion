/*9) Realiza un script que cargue una lista con palabras ingresadas por el usuario.*/ 

const prompt = require(`prompt-sync`)();

let palabra, palabras = [];

do {
    palabra = prompt("Ingrese una palabra (Escriba fin para salir del programa)");
    if (palabra !== "fin"){
    palabras.push(palabra);
    }
} while (palabra !== "fin")
console.log("Palabras ingresadas: ", palabras.join(", "),".");
console.log(palabras);

//10)Realiza un script que solicite números al usuario correspondientes a notas de alumnos y lospre
//cargue en una lista. Luego debe calcular el promedio de las notas mayores a 7 y el promedio
//total.



//Codigo sere:
/*
const prompt = require ("prompt-sync")();

let e = [];
let usuario="";

do{
    usuario =prompt("ingrese palabras: ");

    e = [usuario];
    if (usuario !== "fin"){
        usuario=usuario +e;
    }
    console.log("mensaje ");
 
}   while(usuario !== "fin");
console.log(e);
*/
/*const prompt =require ("prompt-sync")();
console.log("ingrese una frase en la misma linea");
usuario =prompt("ingrese palabras: ");

let e= [usuario];
console.log (e);
*/


/*
*/