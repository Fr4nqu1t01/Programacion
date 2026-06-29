<?php


$numeros = array();

for($i=0; $i < 10 ; $i++) { 
    echo "ingrese un valor: ";
    $num = trim(fgets(STDIN));
    array_push($numeros, $num);
    echo "numero $num ingresado.";

}

print_r($numeros); //se usa print_r para imprimir los valores que contenga un arreglo.


/*
$numeros = array(1,2,3,4,5,6,7,8,9,0);


for ($i = 0; $i < count($numeros)/2; $i++){
    $aux = $numeros[$i];
    $numeros[$i] = $numeros[count($numeros) - 1 -  $i];
    $numeros[count($numeros) - 1 - $i];
}
*/
?>


// require_once se usa para decirle a un archivo que requiere otro archivo.
