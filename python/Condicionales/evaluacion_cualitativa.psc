Algoritmo calificacion_cualitativa
	Escribir "Nombre estudiante: "
	Leer nombre
	Escribir "Calificación cuantitaiva: "
	Leer eva_cuantitativa
	Si eva_cuantitativa<=59 Entonces
		eva_cualitativa="D"
	SiNo
		Si eva_cuantitativa<=79 Entonces
			eva_cualitativa="C"
		SiNo
			Si eva_cuantitativa<=89 Entonces
				eva_cualitativa="B"
			SiNo
				eva_cualitativa="A"
			Fin Si
		Fin Si
	Fin Si
	Escribir "Nombre estudiante: ",nombre
	Escribir "EValuación Cuantitativa: ",eva_cuantitativa
	Escribir "Evaluacuón Cualitativa: ",eva_cualitativa
FinAlgoritmo
