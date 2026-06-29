<?php

class Calculadora
{

    static function suma(array $datos)
    {
        $resultado = 0;

        foreach ($datos as $n) {
            $resultado += $n;
        }
        return $resultado;
    }
    static function resta(array $datos)
    {
        $resultado = array_shift($datos);
        foreach ($datos as $n) {
            $resultado -= $n;
        }
        return $resultado;
    }

    static function division(array $datos)
    {
        $resultado = array_shift($datos);
        if ($resultado == 0) {
            return $resultado;
        } else {
            foreach ($datos as $n) {
                if ($n == 0) {
                    return null;
                } else {
                    $resultado /= $n;
                }
            }
            return $resultado;
        }
    }
    static function multiplicacion(array $datos)
    {
        $resultado = array_shift($datos);
        if ($resultado == 0) {
            return $resultado;
        } else {
            foreach ($datos as $n) {
                $resultado *= $n;
            }
            return $resultado;
        }
    }
}

?>