function sumatoria(n){
    if (n === 0) {
        return 0;
    }

    return n + sumatoria(n - 1)
}

// console.log(sumatoria(5))

function factorial(n){
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1)
}

// console.log(factorial(5))

function potenciacion(base, exponente){
    if (exponente === 0) {
        return 1 ;
    }

    return base * potenciacion(base, exponente - 1);
}

// console.log(potenciacion(2,4))

function fibonacci(n){
    if(n === 0){
        return 0;
    }
    else if (n === 1){
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonacci(7))

function maxArr(arr,i){
    if (i === 0){
        return arr[i];
    }
    if(arr[i] < arr[arr.length - i]){
        return 
    }
}