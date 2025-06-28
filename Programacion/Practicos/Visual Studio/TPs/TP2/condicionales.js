/*5. Realiza una aplicación que solicite una edad al usuario e indique si es mayor a 18 años o
menor.*/
var edad=19;

if (edad>=18) {
    
    console.log("Usted es mayor")
    
} else {
    
    console.log("Usted es menor")
    
}

/*6. Realiza una aplicación que dado dos valores numéricos ingresados por el usuario, indique
en pantalla cual es el mayor y cual es el menor.*/

var num1 = 8;
var num2 = 8;
if (num1>num2) {
    console.log("el mayor es: ",num1,)
    
} else {
    if (num1<num2) {
        console.log("el mayor es: ",num2,)
        
    }
    else {
        console.log("Son iguales")
    }
    
}

/*7. Realiza un diagrama de flujo que dado 3 números, muestre por pantalla cual es menor, cual
es mayor y cual está entremedio de los otros dos. Dado el diagrama construido realiza un
programa que materialice lo diseñado en el diagrama.*/

var numero1 = 10;
var numero2 = 20;
var numero3 = 80;

if (numero1>numero2 && numero1>numero3) {
    console.log("El mayor es el numero 1: "+numero1)
    if (numero2>numero3) {
        console.log("el menor es el numero 3: "+numero3)
        console.log("el del medio es el numero 2: "+numero2)
    }
        else {
         console.log("el menor es el numero 2: "+numero2)
         console.log("el del medio es el numero 3: "+numero3)   
        }
} else if (numero2>numero3) {
    console.log("El mayor es el numero 2: "+numero2)
    if (numero1>numero3) {
        console.log("el menor es el numero 3: "+numero3)
        console.log("el del medio es el numero 1: "+numero1)
        
    } else {
        console.log("el menor es el numero 1: "+numero1)
        console.log("el del medio es el numero 3: "+numero3)
    }
    
} else {
    console.log("el mayor es el numero3: "+numero3)
    if (numero1>numero2) {
        console.log("el menor es el numero 2: "+numero2)
        console.log("el del medio es el numero 1: "+numero1)

        
    } else {
        console.log("el menor es el numero 1: "+numero1)
        console.log("el del medio es el numero 2: "+numero2)
    }
    
}