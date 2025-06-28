let lista = [1,2,3,4,5,6];
let inverso = [];
console.log("Lista original; ", lista);
for (let i = 0; i < lista.length; i++){
    inverso[i] = lista[lista.length -1 -i];
}
console.log("Lista invertida: ", inverso);
