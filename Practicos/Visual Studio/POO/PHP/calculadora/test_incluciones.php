<?php

//que sucede si utilizo require en ambos archivos?

//require('C:\Users\Thomiiii\Desktop\Franco\Programacion\Practicos\Visual Studio\POO\PHP\calculadora\calculadora.php');
//require('C:\Users\Thomiiii\Desktop\Franco\Programacion\Practicos\Visual Studio\POO\PHP\calculadora\menu.php');

//menu()

//al utilizar require en ambos archivos, el programa funcionó correctamente sin lanzar ningun fallo critico.

//que sucede si utilizo require en calculadora e include en menu?

include ('C:\Users\Thomiiii\Desktop\Franco\Programacion\Practicos\Visual Studio\POO\PHP\calculadora\calculadoraa.php');
require('C:\Users\Thomiiii\Desktop\Franco\Programacion\Practicos\Visual Studio\POO\PHP\calculadora\calculadora.php');
include('C:\Users\Thomiiii\Desktop\Franco\Programacion\Practicos\Visual Studio\POO\PHP\calculadora\menu.php');

menu()
?>