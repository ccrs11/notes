Algoritmo honorarios_docente
	Escribir "Cantidad de docentes: "
	Leer N
	total_honorarios=0
	contador_catA=0
	contador_catB=0
	contador_cantC=0
	Para i=1 Hasta N Con Paso 1 Hacer
		Escribir "Documento de identidad. "
		Leer documento
		Escribir "Nombre: "
		Leer nombre
		Escribir "Categoría (A,B, C): "
		Leer categoria
		Escribir "Horas laboradas mes: "
		Leer horas
		Si categoria="A" Entonces
			valor_honorarios=horas*25000
			contador_catA=contador_catA+1
		SiNo
			Si categoria="B" Entonces
				valor_honorarios=horas*35000
				contador_catB=contador_catB+1
			SiNo
				valor_honorarios=horas*50000
				contador_catC=contador_catC+1
			Fin Si
		Fin Si
		total_honorarios=total_honorarios+valor_honorarios
		Escribir "Nombre docente: ",nombre
		Escribir "Valor honorarios: ",valor_honorarios
	Fin Para
	Escribir "Valor total honorarios: ", total_honorarios
	Escribir "Cantidad docentes categoría A: ",contador_catA
	Escribir "Cantidad docentes categoría B: ",contador_catB
	Escribir "Cantidad docentes categoría C: ",contador_catC
FinAlgoritmo
