/*5) Realiza un script que dada una lista de caracteres devuelva si la misma es un palindromo o no.*/

let lista = ["a","b","b","f"];
let EsPalindromo = true;

for ( let i = 0; i < lista.length/2; i++) {
    if (lista[i] !== lista[lista.length -1 -i]) {
        EsPalindromo = false;
        break
    }
}
if (!EsPalindromo)
console.log("No es un palindromo");
else console.log(" es un palindromo");
