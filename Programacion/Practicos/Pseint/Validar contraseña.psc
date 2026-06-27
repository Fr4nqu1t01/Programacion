Algoritmo ValidarContraseña
	//Desarrolar un algoritmo
	//en el que el usuario deba ingresar una contraseña de al menos 10 caracteres
	//que contenga numeros y letras en minuscula.
	//Si el usuario ingresa un caracter incorrecto, debera repetir la contraseña
		
		// Definimos las variables
		Definir clave Como Cadena                      // Almacena la contraseña ingresada
		Definir esValida, tieneLetraMin, tieneNumero Como Logico  // Banderas de validación
		Definir caracter Como Cadena                  // Guarda cada carácter de la clave
		
		Repetir
			// Pedimos la contraseña al usuario
			Escribir "Ingrese una contraseña:"
			Leer clave
			
			// Verificamos que tenga al menos 10 caracteres
			esValida <- Longitud(clave) >= 10
			
			
			tieneLetraMin <- Falso    // Para saber si hay al menos una letra minúscula
			tieneNumero <- Falso      // Para saber si hay al menos un número
			
			// Si cumple con la longitud, analizamos carácter por carácter
			Si esValida Entonces
				
				Para i <- 1 Hasta Longitud(clave)
					
					// Extraemos el carácter en la posición i
					caracter <- Subcadena(clave, i, i)
					
					// Si es una letra minúscula, activamos la bandera
					Si caracter >= "a" Y caracter <= "z" Entonces
						tieneLetraMin <- Verdadero
					FinSi
					
					// Si es un número, activamos la otra bandera
					Si caracter >= "0" Y caracter <= "9" Entonces
						tieneNumero <- Verdadero
					FinSi
					
					// Si no es ni letra minúscula ni número, la clave es inválida
					Si No ((caracter >= "a" Y caracter <= "z") O (caracter >= "0" Y caracter <= "9")) Entonces
						esValida <- Falso
					FinSi
					
				FinPara
				
				// Si le falta una letra minúscula o un número, la clave es inválida
				Si No tieneLetraMin O No tieneNumero Entonces
					esValida <- Falso
				FinSi
				
			FinSi
			
			// Si no pasó las validaciones, se avisa al usuario
			Si No esValida Entonces
				Escribir "Contraseña inválida. Debe tener al menos 10 caracteres, incluir letras minúsculas y números."
			FinSi
			
			// Se repite hasta que la contraseña sea válida
		Hasta Que esValida
		
		// Se confirma que la contraseña es correcta
		Escribir "Contraseña válida."

FinAlgoritmo
