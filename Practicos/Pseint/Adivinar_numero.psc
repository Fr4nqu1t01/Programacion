Algoritmo Adivinar_numero
	// Diseña un programa que genere un numero secreto entre 1 y 10 donde el usuario tendra 3 intentos para adivinar el numero.
	// luego de cada intento, el programa debera decir si el usuario acerto el numero o no.
	// Si Adivina, termine el programa con un mensaje de felicitacion. Si falla los 3 intentos, muestre el numero generado.
	secreto <- azar(10)+1
	intentos <- 0
	acerto <- falso
	Mientras intentos<3 Y acerto=falso Hacer
		Escribir 'adivina el numero (1 al 10)'
		Leer num
		intentos <- intentos+1
		Si num=secreto Entonces
			acerto <- verdadero
			Escribir '¡Correcto! El numero era ', secreto, '!'
		SiNo
			Escribir 'Incorrecto'
		FinSi
	FinMientras
	Si acerto=falso Entonces
		Escribir 'No acertaste. El numero era " secreto
	FinSi
FinAlgoritmo
