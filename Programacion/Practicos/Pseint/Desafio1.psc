Algoritmo  desafio
	//Crear un algoritmo que valide una clave secreta con estas condiciones:
	
    //Exactamente 8 caracteres
	
    //Solo letras mayúsculas (A-Z) y números (0-9)
	
    //Si no cumple, debe volver a pedirla
		
	//Usar un solo bucle, pero todos los condicionales que necesites
	definir clave como cadena
	definir esValida Como Logico
	definir caracter como cadena
	
	Repetir
		 
		Escribir "Ingrese clave secreta"
		leer clave
	
		esValida <- Longitud(clave) < 8
		
		si esValida Entonces
			para i<- 1 hasta Longitud(clave)
				caracter <- Subcadena(clave, i, i)
				si no ((caracter >= "A" y caracter <= "Z") O (caracter >= "0" y caracter <= "9")) Entonces
					
					esValida <- Falso
					
				FinSi
			FinPara
		FinSi
				si no esValida Entonces
					Escribir "La clave debe ser de exactamente 8 caracteres. Solo letras mayusculas y numeros"
				FinSi
				
	Hasta Que esValida
			escribir "Clave valida"
	
FinAlgoritmo