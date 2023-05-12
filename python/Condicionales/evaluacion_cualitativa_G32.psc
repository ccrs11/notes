Algoritmo calcular_nota_cualitativa
	Escribir "Nombre estudiante: "
	Leer nombre
	Escribir "Nota Cuantitativa: "
	Leer cuantitativa
	Si cuantitativa<=59 Entonces
		cualitativa="D"
	SiNo
		Si cuantitativa<=79 Entonces
			cualitativa="C"
		SiNo
			Si cuantitativa<=89 Entonces
				cualitativa="B"
			SiNo
				cualitativa="A"
			Fin Si
		Fin Si
	Fin Si
	Escribir "Nombre estudiante: ",nombre
	Escribir "Nota Cuantitativa: ",cuantitativa
	Escribir "Nota Cualitativa: ",cualitativa
FinAlgoritmo
