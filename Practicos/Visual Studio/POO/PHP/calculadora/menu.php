<?php

require_once('C:\Users\Thomiiii\Desktop\Franco\Programacion\Practicos\Visual Studio\POO\PHP\calculadora\calculadora.php');

function pausa()
{
    $pausar = readline("Presione ENTER para continuar.");
}
function limpiarPantalla()
{
    echo "\e[H\e[J";
}

function menu()
{
    do {
        $datos = [];
        echo "=======Calculadora=======\n";
        echo "1. Sumar\n";
        echo "2. Restar\n";
        echo "3. Dividir\n";
        echo "4. Multiplicar\n";
        echo "0. Salir\n";

        $opcion = readline("ingrese una opcion: ");
        if ($opcion > 0 && $opcion <= 4) {

            do {
                do {
                    $num = readline("Ingrese un valor: ");
                    if (!is_numeric($num)) {
                        echo "Valor invalido. Debe ingresar un valor numerico.\n";
                        sleep(1);
                    }
                } while (!is_numeric($num));
                array_push($datos, $num);
                echo "valor $num ingresado correctamente.\n";
                sleep(1);
                $input = readline("Desea agregar otro numero? (s/n) ");
            } while ($input != "n");

        }
        switch ($opcion) {
            case 1:
                $resultado = Calculadora::suma($datos);
                echo "Resultado: $resultado \n";
                pausa();
                limpiarPantalla();
                break;
            case 2:
                $resultado = Calculadora::resta($datos);
                echo "Resultado: $resultado \n";
                pausa();
                limpiarPantalla();
                break;
            case 3:
                $resultado = Calculadora:: division($datos);
                echo "Resultado: $resultado \n";
                pausa();
                limpiarPantalla();
                break;
            case 4:
                $resultado = Calculadora::multiplicacion($datos);
                echo "Resultado: $resultado \n";
                pausa();
                limpiarPantalla();
                break;
            case 0:
                echo "Saliendo...";
                sleep(1);
                break;
            default:
                echo "Opcion invalida.\n";
                break;
        }
    } while ($opcion != 0);
}