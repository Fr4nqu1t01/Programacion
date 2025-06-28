let lista1 = [2, 4, 6, 10, 10];
let lista2 = [4, 10, 10, 2, 6];
let igualdad = true;

if (lista1.length !== lista2.length) {
  igualdad = false;
}

// Verifica que todos los elementos de lista1 estén en lista2
for (let i = 0; i < lista1.length; i++) {
  let encontrado = false;
  for (let j = 0; j < lista2.length; j++) {
    if (lista1[i] === lista2[j]) {
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    igualdad = false;
    break;
  }
}

// Verifica que todos los elementos de lista2 estén en lista1
if (igualdad) {
  for (let i = 0; i < lista2.length; i++) {
    let encontrado = false;
    for (let j = 0; j < lista1.length; j++) {
      if (lista2[i] === lista1[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      igualdad = false;
      break;
    }
  }
}

// Mostrar el resultado
if (igualdad) {
  console.log(
    "laslistas contienen los mismos valores, pero en diferentes posiciones."
  );
} else {
  console.log("las lista contienen distintos valores");
}
