/* 1. Mostrar los números del 1 al 10 utilizando una función y un bucle.*/
/*
console.log("Ejercicio 1:")
function UnoAlDiez() {
  for (let i = 0; i <= 10; i++) {
    console.log(i)
  }
}

UnoAlDiez()

2. Mostrar los números pares del 1 al 20.
console.log("Ejercicio 2:")
function Pares() {
  for (let i = 0; i <= 20; i = i + 2) {
    if (i > 1) {
      console.log(i)
    }
  }
}

Pares()

/*3. Mostrar los elementos de un arreglo de nombres dentro de la función.
console.log("Ejercicio 3:")

function ValorArreglo() {
  let Arreglo = [1, 2, 3, 4, 5]
  for (let i = 0; i < Arreglo.length; i++) {
    console.log(Arreglo[i])
  }
}

ValorArreglo()

/*4. Mostrar la suma de los números del 1 al 100.
console.log("Ejercicio 4:")
function SumaNumeros() {
  let suma = 1
  for (let i = 0; i <= 100; i++) {
    if (i > 1) {
      suma = suma + i
    }
  }
  console.log(`La suma de los numeros es: ${suma}.`)
}

SumaNumeros()

let valor = 100

let sumatotal = (valor * (valor + 1)) / 2
console.log(sumatotal)

/*5. Calcular el promedio de un arreglo de 5 números.
console.log("Ejercicio 5:")
function Promedio() {
  let Promedio = 0,
    Suma = 0
  let arreglo = [3, 6, 1, 8, 2]
  for (let i = 0; i < arreglo.length; i++) {
    Suma = Suma + arreglo[i]
  }
  Promedio = Suma / arreglo.length
  console.log(`El promedio es: ${Promedio}.`)
}

Promedio()

/*6. Contar cuántos números pares hay en un arreglo.
console.log("Ejercicio 6:")
function Par() {
  let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let Pares = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      Pares++
    }
  }
  console.log(`Hay ${Pares} pares dentro del arreglo.`)
}

Par()

/*7. Mostrar el mayor número de un arreglo definido dentro de la función.
console.log("Ejercicio7:")
function MayorMenor() {
  let arreglo = [1, 2, 3, 4, 5, 6, 7, 8]
  let Mayor = arreglo[0]
  let Menor = arreglo[0]

  for (let i = 0; i < arreglo.length; i++) {
    if (Mayor < arreglo[i]) {
      Mayor = arreglo[i]
    } else if (Menor > arreglo[i]) {
      Menor = arreglo[i]
    }
  }
  console.log(`El mayor es el ${Mayor} y el menor es el ${Menor}.`)
}

MayorMenor()

/*8. Crear un arreglo de 10 números y mostrar solo los mayores a 5.
console.log("Ejercicio8:")
function Mayores() {
  let arreglo = [20, 10, 3, 7, 6, 19, 1, 39, 1, 46]
  let Mayor5 = []
  let k = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 5) {
      Mayor5[k] = arreglo[i]
      k++
    }
  }
  console.log(`Numeros mayores a 5: ${Mayor5}.`)
}

Mayores()

/*9. Contar cuántas veces aparece un número específico dentro de un arreglo.
console.log("Ejercicio 9:")
function contarNumero(numero) {
  let arreglo = [1, 1, 2, 3, 7, 3, 4, 4, 3, 5, 3]
  let contador = 0

  for (let i = 0; i < arreglo.length; i++) {
    if (numero === arreglo[i]) {
      contador++
    }
  }
  if (contador > 1) {
    console.log(`El numero ${numero} aparece ${contador} veces`)
  } else if (contador === 1) {
    console.log(`El numero ${numero} aparece ${contador} vez.`)
  } else {
    console.log(`El numero ${numero} no esta dentro de la lista.`)
  }
}

contarNumero(10)

/*10. Mostrar los números del 10 al 1 (en orden descendente)
console.log("Ejercicio 10:")
function descendente() {
  for (let i = 10; i >= 0; i--) {
    console.log(i)
  }
}

descendente()*/
/*11. Crear un arreglo de 10 números. Calcular la cantidad de números positivos, 
negativos y ceros.*/
/*
function rectaNumerica() {
  let arreglo = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
  let positivos = 0,
    negativos = 0,
    ceros = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 0) {
      positivos++
    } else if (arreglo[i] < 0) {
      negativos++
    } else {
      ceros++
    }
  }
  if (positivos > 0) {
    console.log(`Hay ${positivos} numeros positivos.`)
  } else {
    console.log("No hay ningun numero positivo dentro de la recta.")
  }
  if (negativos > 0) {
    console.log(`Hay ${negativos} numeros negativos.`)
  } else {
    console.log("No hay numeros negativos dentro de la recta.")
  }
  if (ceros > 0) {
    console.log(`Hay ${ceros} ceros dentro de la recta.`)
  } else {
    console.log("No hay ceros dentro de la recta.")
  }
}

rectaNumerica()
*/

/*12. Mostrar los elementos de un arreglo y al mismo tiempo indicar si son pares o 
impares.
console.log("Ejercicio 12:")
function parImpar() {
  let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      console.log(`${arreglo[i]} es par.`)
    } else {
      console.log(`${arreglo[i]} es impar`)
    }
  }
}

parImpar()
*/

/*13. Simular una contraseña guardada en la función y pedir al usuario que intente 
adivinarla (máximo 3 intentos).*/
function Ej13() {
  function contraseña() {
    const prompt = require(`prompt-sync`)();
    let contraseña = "Fr4nqu1t0";
    let usuario;
    let contador = 3;
    while (contador > 0 && usuario !== contraseña) {
      usuario = prompt("intente adivinar la contraseña: ");
      if (usuario === contraseña) {
        console.log("Felicidades! usted adivino la contraseña.");
        contador = 0;
      } else {
        contador--;
        console.log(`Contraseña incorrecta. tiene ${contador} intentos restantes.`);
      }
      if (contador === 0 && usuario !== contraseña) {
        console.log("Limite de intentos alcanzado. No pudo adivinar la contraseña. La contraseña era:", contraseña);
      }
    }
  }

  contraseña();
}
/*14. Simular un carrito de compras. Dentro de la función hay precios de productos, 
mostrar el total de la compra.*/
function ej14() {
  function carrito() {
    let camisa = 13000,
      remera = 23000,
      pantalon = 18000,
      ticket = 0,
      gorra = 8000,
      mochila = 35000;
    let carrito = [camisa, remera, pantalon, gorra, mochila];
    for (let i = 0; i < carrito.length; i++) {
      ticket = ticket + carrito[i];
    }
    console.log("Precio total de la compra:", ticket);
  }

  carrito();
}
/*15. Crear una tabla de multiplicar del 1 al 10 (por ejemplo: 1x1 hasta 10x10)*/
function Ej15() {
  function multiplicar() {
    let multiplicacion = 0;
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        multiplicacion = i * j;
        console.log(`${i} x ${j} = ${multiplicacion}`);
      }
    }
  }

  multiplicar();
}

Ej13();
