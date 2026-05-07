const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matriz2 = [
  [1,2],
  [3,4],
  [5,6]
]
const ejercicio1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
};
//ejercicio1(matriz);

const ejercicio2 = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      suma += arr[i][j];
    }
  }
  console.log(suma);
};
//ejercicio2(matriz);

const ejercicio3 = (arr) => {
  let suma = 0;
  let promedio = 0;
  let resultado = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      suma += arr[i][j];
      promedio++;
    }
  }
  console.log((resultado = suma / promedio));
};

//ejercicio3(matriz);

const ejercicio4 = (arr, elemento) => {
  let encontrado = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == elemento) {
        encontrado = 0;
        break;
      }
    }
  }
  if (encontrado == 0)
    console.log(`El elemento ${elemento} esta en la matriz.`);
  else console.log(`El elemento ${elemento} no esta en la matriz.`);
};

//ejercicio4(matriz,"3");

const ejercicio5 = (arr) => {
  let mayor = arr[0][0];
  let menor = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (mayor < arr[i][j]) {
        mayor = arr[i][j];
      }
      if (menor > arr[i][j]) {
        menor = arr[i][j];
      }
    }
  }
  console.log(`
        Valores de la matriz: ${arr}.
        Numero mayor de la matriz: ${mayor}.
        Numero menor de la matriz: ${menor}.`);
};

//ejercicio5(matriz);

const ejercicio6 = (arr, numero) => {
  let contador = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == numero) contador++;
    }
  }

  return `Veces que aparece el numero ${numero}: ${contador}`;
};

//console.log(ejercicio6(matriz, 4));

const ejercicio7 = (arr) => {
  const resultados = [];

  for (let i = 0; i < arr.length; i++) {
    let suma = 0;
    for (let j = 0; j < arr[i].length; j++) {
      suma += arr[i][j];
    }
    resultados.push(suma);
  }
  return resultados;
};

//console.log(ejercicio7(matriz))

const ejercicio8 = (arr) => {
  const resultados = [];

  for (let i = 0; i < arr.length; i++) {
    let suma = 0;
    for (let j = 0; j < arr[i].length; j++) {
      suma += arr[j][i];
    }
    resultados.push(suma);
  }
  return resultados;
};

//console.log(ejercicio8(matriz));

const ejercicio9 = (arr) => {
  const valores = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        valores.push(arr[i][j]);
      }
    }
  }
  return valores;
};

//console.log(ejercicio9(matriz));

const ejercicio10 = (arr) => {
  const valores = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      if (i + j === arr.length - 1) {
        valores.push(arr[i][j]);
      }
    }
  }
  return valores;
};

//console.log(ejercicio10(matriz));

const ejercicio11 = (arr) => {
  const transpuesta = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (transpuesta[j] == undefined) {
        transpuesta[j] = [];
      }
      transpuesta[j][i] = arr[i][j];
    }
  }
  return transpuesta;
};

//console.log(ejercicio11(matriz));

const ejercicio12 = (arr, escalar) => {
  const escalada = [];

  for (let i = 0; i < arr.length; i++) {
    if (escalada[i] == undefined) {
      escalada[i] = [];
    }
    for (let j = 0; j < arr[i].length; j++) {
      escalada[i][j] = arr[i][j] * escalar;
    }
  }
  return escalada;
};

//console.log(ejercicio12(matriz,9));

const ejercicio13 = (arr, valorBuscado, nuevoValor) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == valorBuscado) {
        arr[i][j] = nuevoValor;
      }
    }
  }
  return arr;
};

//console.log(ejercicio13(matriz,3,10));

const ejercicio14 = (arr) => {
  const pares = [];

  for (let i = 0; i < arr.length; i++) {
    if (pares[i] == undefined) {
      pares[i] = [];
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0) {
        pares[i].push(arr[i][j]);
      }
    }
  }
  return pares;
};

//console.log(ejercicio14(matriz));

const ejercicio15 = (arr) => {
  const copia = [];
  for (let i = 0; i < arr.length; i++) {
    if (copia[i] == undefined) {
      copia[i] = [];
    }
    for (let j = 0; j < arr[i].length; j++) {
      copia[i][j] = arr[i][j];
    }
  }
  return copia;
};

const ejercicio16 = (arr) => {
  const rotada = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (rotada[j] == undefined) {
        rotada[j] = [];
      }
      rotada[j][i] = arr[i][j];
    }
  }
  let x = 0;
  for (let i = 0; i < rotada.length; i++) {
    for (let j = 0; j < rotada[i].length/2; j++) {
      x = rotada[i][j];
      rotada[i][j] = rotada[i][rotada[i].length - 1 - j];
      rotada[i][rotada[i].length - 1 - j] = x;
    }
  }
  return rotada;
};

//console.log(ejercicio16(matriz));

const ejercicio17 = (m1,m2) => {
  function colm1Filam2(m1,m2){
    return m1[0].length == m2.length;
  }
  function multiplicacion(m1,m2) {
    let m3 = [];
    for (let i = 0; i < m1.length; i++){
      if (m3[i] == undefined)
        m3[i] = [];
      for (let j = 0; j < m2[0].length; j++){
        let suma = 0;
        for (let k = 0; k < m2.length; k++){
          suma += m1[i][k] * m2[k][j];
        }
        m3[i].push(suma);
      }
    }
    return m3;
  }
  if (colm1Filam2(m1,m2))
    return multiplicacion(m1,m2);
  else 
    return `las columnas de m1 no son iguales a las fila de m2.
  columnas de m1: ${m1[0].length}
  filas de m2: ${m2.length}`;
}

console.log(ejercicio17(matriz,matriz2));

const ejercicio18 = (m) => {
  function esCuadrada (m){
    let i = 0;
    let cuadrada = true;
    while (cuadrada == true && i < m.length) {
      if(m[i].length !== m.length) {
        cuadrada = false;
      }
      i++;
    }
    return cuadrada;
  }

  function identidad (m) {
    let i = 0;
    let j = 0;
    let iden = true;
    while(iden == true && i < m.length) {
      if (m[i][i] !== 1) {
        iden = false;
      }
      while (iden == true && j < m[i].length){
        if ( i !== j && m[i][j] !== 0) {
          iden = false;
        }
        j++;
      } 
      i++;
      j = 0;
    }
    return iden;
  }
  if (esCuadrada(m)) {
    if (identidad(m)) {
      console.log(`la matriz es identidad.`);
    }
    else {
      console.log(`la matriz NO es identidad.`);
    }
  }
  else {
    console.log(`La matriz NO es cuadrada.`);
  }
}
