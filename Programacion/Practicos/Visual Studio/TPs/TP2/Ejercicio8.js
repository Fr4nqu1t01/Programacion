/*8. Realiza un programa que dados 4 números almacenados en variables, calcule la suma y 
multiplicación de los mismos y muestre por pantalla un mensaje que indique si la suma da 
mayor a 30 y la multiplicación menor a 400 (deben darse las 2 condiciones 
simultáneamente) y otro mensaje en caso contrario.*/

let num1 = 9;

let num2 = 9;

let num3 = 9;

let num4 = 5;

let suma = num1 + num2 + num3 + num4;

let multiplicacion = num1 * num2 * num3 * num4;

if (suma>30 && multiplicacion < 400) {

    console.log("La suma es mayor a 30: Es",suma);
    console.log("La multiplicacion es menor a 400: Es ",suma);

} else {

    console.log("Las condiciones de la suma o multiplicacion no se cumplieron");
    console.log("Valor de suma:", suma , "Valor de multiplicaion:", multiplicacion);

}