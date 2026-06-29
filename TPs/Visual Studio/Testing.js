const prompt = require("prompt-sync")();

function ej1() {
  let opcion = -1;
  while (opcion != 0) {
    opcion = prompt("ingrese un numero (ingrese 0 para salir): ");
    num = parseInt(opcion);
    if (num == 0) console.log("saliendo...");
    else console.log(`numero ingresado: ${num}.`);
  }
}

function ej2() {
  let cat = "";
  let opcion = -1;

  while (opcion != "cancelar") {
    opcion = prompt("ingrese palabra (escriba cancelar para salir): ");
    if (opcion != "cancelar") cat += opcion + "-";
  }

  console.log(cat);
}

function ej3() {
  for (let i = 500; i <= 1000; i++) {
    if (i % 2 == 0) console.log(i);
  }
}

function ej4() {
  let opcion = prompt("ingrese un numero: ");
  let num = parseInt(opcion);

  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

function ej5() {
  let opcion = prompt("ingrese un numero: ");
  let num = Number(opcion);
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function ej6() {
  let contador = 1;
  for (let i = 1; i <= 500; i++) {
    if (contador % 5 === 0) {
      console.log("-------------------------");
      contador++;
    }
    if (i % 4 === 0 && i % 9 === 0) {
      console.log(i + " <-- Multiplo de 4 y 9!!");
      contador++;
    } else {
      console.log(i);
      contador++;
    }
  }
}

function ej7() {
  let contador = 0;
  let input = -1;
  while (input != "fin") {
    input = prompt("ingrese palabra (escriba fin para terminar): ");
    if (input != "fin") {
      contador++;
    }
  }
  console.log("el usuario ingresó " + contador + " palabras");
}

function ej8() {
  let input = -1;
  let cat = "";
  let num = 0;
  do {
    input = prompt("Ingrese un numero no mayor que 50: ");
    num = Number(input);
    if (num > 50) {
      console.log("El numero no puede ser mayor que 50.");
    }
  } while (num > 50);
  if (num > 0 && num <= 50) {
    for (let i = 1; i <= num; i++) {
      cat += `${i}`;
      console.log(cat);
    }
  } else if (num < 0) {
    for (let i = 1; i >= num; i--) {
      cat += ` ${i}`;
      console.log(cat);
    }
  }
}

function ej9() {
  let lista = [];
  let input = -1;
  let num = 0;
  while (input != "fin") {
    input = prompt("Ingrese un numero (escriba fin para salir): ");
    num = Number(input);
    if (!isNaN(num)) {
      lista.push(num);
    } else {
      console.log("valor invalido.");
    }
  }
  console.log(`Lista de numeros ingresados: ${lista}`);
}

function ej10() {
  const notas = [];
  const promocion = [];
  let input = -1;
  let num = 0;
  let promedioTotal = 0;
  let totalProm = 0;
  while (input != "fin") {
    input = prompt("Ingrese notas (escriba fin para salir): ");
    if (input != "fin") {
      num = Number(input);
      if (!isNaN(num) && num > 0 && num <= 10) {
        notas.push(num);
      } else {
        console.log("valor invalido.");
      }
    }
  }
  console.log(notas);

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
      promocion.push(notas[i]);
      totalProm += notas[i];
    }
    promedioTotal += notas[i];
  }
  console.log(promocion);
  if (notas.length > 0 && promocion.length > 0) {
    console.log(`Promedio promocionados: ${totalProm / promocion.length}`);
    console.log(`Promedio Total: ${(promedioTotal / notas.length).toFixed(2)}`);
  }
}

function ej11() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let aux = 0;
  console.log(`Array original: ${arr}`);
  for (let i = 0; i < arr.length / 2; i++) {
    aux = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = aux;
  }

  console.log(`Array invertido: ${arr}`);
}
