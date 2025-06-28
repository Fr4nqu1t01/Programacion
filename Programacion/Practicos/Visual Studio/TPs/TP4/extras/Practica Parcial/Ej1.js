function Ej1() {
  /* 1) Cargar un array de 50 números aleatorios.*/
  let arreglo = [];
  for (let i = 0; i < 50; i++) {
    let random = Math.floor(Math.random() * 501);
    arreglo[i] = random;
  }
  console.log(arreglo);
}

function Ej2() {
  /* 2) Mostrar los datos de un array de forma individual con un texto como por ejemplo: "Elemento dato en posición index".
   */
  let arreglo = [20, "hola", "chau", 69, 1539, "jaja", 12];

  for (let i = 0; i < arreglo.length; i++) {
    console.log(`Elemento dato en posicion ${i}: ${arreglo[i]}.`);
  }
}

function Ej3() {
  /* 3) Dado un arreglo con números enteros, realiza una función que genere otro valor aleatorio
e imprima los elementos del array que son múltiplos del valor generado.
*/

  let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function Random() {
    let valor = Math.floor(Math.random() * 50) + 1;
    console.log(`Numero aleatorio generado: ${valor}`);
    for (let i = 0; i < arreglo.length; i++) {
      if (valor % arreglo[i] === 0) console.log(`El numero ${valor} es multiplo de ${arreglo[i]}.`);
    }
  }
  Random();
}

function Ej4() {
  /*4) Se tiene información de las velocidades de vuelo de 10 pájaros
si los mismos deben recorrer 50 kms, cuál de ellos lo hará más rápido?.
Los valores son aleatorios y la fórmula de velocidad = distancia / tiempo.*/

  const distancia = 50;
  let velocidad, tiempo;
  let velPajaros = [];
  let masRapido = 0;
  let indice = 0;
  for (let i = 0; i < 10; i++) {
    tiempo = Math.floor(Math.random() * 100) + 1;
    velocidad = distancia / tiempo;
    velPajaros[i] = velocidad;
  }
  for (let i = 0; i < velPajaros.length; i++) {
    if (velPajaros[i] > masRapido) {
      masRapido = velPajaros[i];
      indice = i;
    }
  }
  console.log("velocidades de los 10 pajaros (Km/h): ");
  for (let i = 0; i < velPajaros.length; i++) {
    console.log(`Pajaro ${i + 1}: ${velPajaros[i].toFixed(2)} Km/h.`);
  }
  console.log(
    `El pajaro mas rapido es el numero ${indice}, con una velocidad de ${velPajaros[indice].toFixed(2)} KmH.`
  );
}

function Ej5() {
  /* 5) Mejora el código anterior para que acepte un valor de distancia ingresado por el usuario.*/
  const prompt = require(`prompt-sync`)();
  let distancia;
  while (isNaN(distancia)) {
    distancia = Number(prompt("Ingrese la distancia que tienen que recorrer: "));
    if (isNaN(distancia)) {
      console.log("Valor invalido. Intentalo denuevo.");
    }
  }
  console.log(`Valor ingresado: ${distancia}`);
  let velocidad, tiempo;
  let velPajaros = [];
  let masRapido = 0;
  let indice = 0;
  for (let i = 0; i < 10; i++) {
    tiempo = Math.floor(Math.random() * 100) + 1;
    velocidad = distancia / tiempo;
    velPajaros[i] = velocidad;
  }
  for (let i = 0; i < velPajaros.length; i++) {
    if (velPajaros[i] > masRapido) {
      masRapido = velPajaros[i];
      indice = i;
    }
  }
  console.log("velocidades de los 10 pajaros (Km/h): ");
  for (let i = 0; i < velPajaros.length; i++) {
    console.log(`Pajaro ${i}: ${velPajaros[i].toFixed(2)} Km/h.`);
  }
  console.log(
    `El pajaro mas rapido es el numero ${indice}, con una velocidad de ${velPajaros[indice].toFixed(2)} KmH.`
  );
}

/*Generador de DNI válidos
Generar 20 DNIs aleatorios (números entre 10000000 y 99999999).
Validar cuáles son pares.
Mostrar cuántos son válidos (pares) y cuántos no.
Posibles funciones puden ser: generarDNIs, esPar, contarValidos, mostrarResultados, etc*/

function Dni() {
  //Math.random entre 10000000 y 9999999 Math.floor(Math.random() * 90000000) + 10000000;
  //numeros pares
  let pares = 0,
    impares = 0;
  for (let i = 0; i < 20; i++) {
    const dni = Math.floor(Math.random() * 90000000) + 10000000;
    if (dni % 2 === 0) {
      console.log(`DNI generado: ${dni} (PAR)`);
    } else {
      console.log(`DNI generado: ${dni} (IMPAR)`);
    }
    if (dni % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  console.log(`De los 20 dni generados, ${pares} son validos (pares) y ${impares} no son validos (impares).`);
}
Dni();
//Juego de memoria
//Simular una secuencia de 5 colores como texto (ej. 'rojo', 'verde', 'azul') en un array.
//Simular la repetición de esa secuencia por un "jugador" (otro array generado).
//Mostrar cuántos aciertos tuvo en la posición correcta.

function simonDice() {
  const prompt = require(`prompt-sync`)();

  let colores = ["rojo", "verde", "azul", "naranja", "amarillo"];
  let jugador;
  let coloresJugador = [];
  let acertados = 0;
  for (let i = 0; i < 5; i++) {
    jugador = prompt("Ingrese colores: ");
    coloresJugador[i] = jugador;
  }
  for (let i = 0; i < colores.length; i++) {
    if (coloresJugador[i] === colores[i]) {
      acertados++;
    }
  }
  if (acertados === colores.length) {
    console.log("Felicidades! Usted acerto todos los colores.");
  } else {
    console.log(`El usuario acerto ${acertados} numeros.`);
  }
}
simonDice();
