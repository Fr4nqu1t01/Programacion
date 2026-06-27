let list1 = [2, 7, 6, 8, 10];
let list2 = [2, 6, 4, 10, 8];

let igualdad = true;

if (list1.length !== list2.length) {
    igualdad = false;
} else {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) {
            igualdad = false;
            break;
        }
    }
}

if (igualdad) {
    console.log("ambas listas son iguales");
} else {
    console.log("las listas no son iguales");
}