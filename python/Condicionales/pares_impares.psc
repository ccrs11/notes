Algoritmo pares_impares
	cantidad_pares=0
	cantidad_impares=0
	Escribir "N�mero: "
	Leer num
	Mientras num<>-1 Hacer
		Si num%2=0 Entonces
			Escribir "El n�mero ",num, " es PAR"
			cantidad_pares=cantidad_pares+1
		SiNo
			Escribir "El n�mero ",num, " es IMPAR"
			cantidad_impares=cantidad_impares+1
		Fin Si
		Escribir "N�mero: "
		Leer num
	Fin Mientras
	Escribir "Cantidad de Pares: ",cantidad_pares
	Escribir "Cantidad de Impares: ", cantidad_impares
FinAlgoritmo
