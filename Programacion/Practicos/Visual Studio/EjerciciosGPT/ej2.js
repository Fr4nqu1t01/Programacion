/*Suma de elementos de un arreglo
Declara un arreglo con 10 números.
Usa un bucle para sumarlos y muestra el resultado con console.log.*/

let lista1 = [1,2,3,4,5,6,7,8,9,10];
let lista2 = [1,2,3,4,5,6,7,8,9,10];
let suma = 0,sumatotal = 0;
for (let i = 0; i <= lista1.length - 1; i++) {
    suma = lista1[i] + lista2[i];
    sumatotal = sumatotal + suma;
}
console.log(`La suma de los arreglos es igual a: ${sumatotal}`);
