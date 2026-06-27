/*14) Realiza un script que dada una lista de números devuelva el mayor y el menor de esa lista y 
donde se encuentra cada uno.*/

let lista = [44,5,1,90,90,3,6,7,8,9,21];
let posMayores = [];
let posMenores = [];
let mayor = lista[0], menor = lista[0], indiceMayor = 0 , indiceMenor = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] >= mayor) {
        mayor = lista[i];
        indiceMayor = i;
    }
    if (lista[i] <= menor) {
        menor = lista[i];
        indiceMenor = i;
    }
}
let k = 0;
let m = 0;
for (let j = 0; j < lista.length; j++) {
    if (lista[j] == mayor) {
        posMayores[k] = j;
        k++; 
    }
    if (lista[j] == menor) {
        posMenores[m] = j;
        m++
    }
} 
if (posMayores.length > 1 && posMenores.length > 1) {
    console.log(`el mayor es ${mayor} y se encuentra en las posiciones ${posMayores}. el menor es ${menor} y se encuentra en las posiciones ${posMenores}.`);
} else if (posMayores.length > 1) {
    console.log(`El mayor es ${mayor} y se encuentra en las posiciones ${posMayores}. El menor es ${menor} y se encuentra en la posicion ${indiceMenor}.`);
} else if (posMenores.length > 1) {
    console.log(`El mayor es ${mayor} y se encuentra en la posicion ${indiceMayor}. El menor es ${menor} y se encuentra en las posiciones ${posMenores}.`);
} else {
    console.log(`El mayor es ${mayor} y se encuentra en la posicion ${indiceMayor}. El menor es ${menor} y se ecuentra en la posicion ${indiceMenor}.`);
}