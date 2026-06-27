
//Dada una lista con cuentas bancarias con la siguiente información:

cuenta = {
tipo: "corriente", // "ahorro"
importe: 200,
tipoMoneda: "peso", // "euro", // "dolar",
plazoFijo: [{
estado: "activo", // "inactivo"
importe: 100,
fechaCreacion: "2020-01-01",
plazo: 30, // en dias
}],
}

/*
Donde plazoFijo indica si la cuenta tiene asociado un plazo fijo o no.

a) Realiza una función que devuelva todos las cuentas con plazos fijos activos a partir de una
fecha dada.

b) Realiza una función que devuelva todos las cuentas con plazos fijos con plazo mayor a 30
días.

c) Realiza una función que devuelva todos las cuentas del tipo corriente.

d) Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.

e) Realiza una función que permita descontar un importe dado (mantenimiento de cuenta) a
todas las cuentas en la lista.

f) Realiza una función que permita incrementar un porcentaje dado (por veneficios
exclusivos) a todas las cuentas con plazo fijo con importe mayor a 500000.

g) Realiza una función que permita cargar una nueva cuenta al final de la lista.

h) Realiza una función que permita ordenar la lista según el importe de cada cuenta.

i) Realiza una función que permita ordenar la lista según el vencimientos de los plazos fijos.

*/