<?php

while ($opcion !== 0){

    echo "sistema de gestion bancaria \n";
    echo "1. Listado de movimientos \n";
    echo "2. Listado de ingresos \n";
    echo "3. Listado de egresos \n";
    echo "0. Salir \n";
$opcion = readline("ingrese una opcion: ");
    switch ($opcion){
        case 1:
            echo "listado de movimientos";
            break;
        case 2:
            echo "listado de ingresos";
            break;
        case 3:
            echo "listado de egresos";
            break;
        case 0:
            echo "saliendo del sistema";
            break;
        default:
            echo "opcion no valida";
            break;
    }
    
}