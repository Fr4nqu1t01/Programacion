function Ej1(){
function solveLineEquation (a,b,c,x,){

    const y = (-a*x-c)/b
    return y;
}
console.log (solveLineEquation(2,6,9,5));
}
/*La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una
función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.*/

function Ej2(){
    function solveQuadEquation(a,b,c){
        const discriminante = (b**2) - (4*a*c);
        console.log(`Disccriminante: ${discriminante}`);
}
solveQuadEquation(7,1,2);
}
function ejercicio8() {
const addItem = (elemento) => {
    const array = ["hola", 2, 3,78, 10];
    array[array.length] = elemento;
    return array
}
console.log(addItem("chau"));
}

function ejercicio9(){
    const removeItem = (indice) => {
        const array = [1,2,3,4,5,6];
        const arrayCopia = [];
        let k = 0;
        for (let i = 0; i < array.length; i++){
            if (i !== array[indice]){
                arrayCopia[k] = array[i];
                k++;
            }
        }
        console.log(`Arreglo original: ${array}.`)
        return arrayCopia
    }
    console.log(`Arreglo con el elemento eliminado: ${removeItem(2)}`)
}


function ej10(){
    const sumOfNumbers = (numero) => {
        let suma = 0;
        for (let i = 1; i <= numero; i++){
            suma += i;
        }
        return suma
    }
    console.log(sumOfNumbers(20))
}

    const evensAndOdds = (entero) => {
        let pares = 0;
        let impares = 0;
        for (let i = 0; i <= entero; i++){
            if (i % 2 === 0){
                pares++;
            } else {
                impares++;
            }
        }
        return `
        Numero entero: ${entero}

        Cantidad de pares: ${pares}.
        Cantidad de impares: ${impares}.`
    }
    console.log(evensAndOdds(100));
    