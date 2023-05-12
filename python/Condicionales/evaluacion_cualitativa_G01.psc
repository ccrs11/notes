Algoritmo calcular_nota_cuantitativa
	Escribir "Nombre estudiante: "
	Leer nombre
	Escribir "Nota cuantitativa: "
	Leer nota_cuantitativa
	Si nota_cuantitativa<=59 Entonces
		nota_cualitativa="D"
	SiNo
		Si nota_cuantitativa<=79 Entonces
			nota_cualitativa="C"
		SiNo
			Si nota_cuantitativa<=89 Entonces
				nota_cualitativa="B"
			SiNo
				nota_cualitativa="A"
			Fin Si
		Fin Si
	Fin Si
	Escribir "Nombre: ",nombre
	Escribir "Nota Cuantitativa: ",nota_cuantitativa
	Escribir "Nota Cualitativa: ",nota_cualitativa
FinAlgoritmo
