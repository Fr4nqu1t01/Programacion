let n = 2;
let m = 6; 
let x = 0;
let valores = [];

for(let i = m; m > 0; i++){

    valores.push((n+1))
    n++;
}
console.log(`valores: ${valores}`);

for (let i = 0; i < valores.length; i++){
    for(let k = 0; k < valores.length; k++){
        if(valores[i] < valores[k]){
            x = valores[i];
            valores[i] = valores[k];
            valores[k] = x;
        }
    }
}

console.log(`valores invertidos: ${valores}`);