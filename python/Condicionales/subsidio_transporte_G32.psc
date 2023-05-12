Algoritmo calcular_subsidio_transporte
	Escribir "Nombre empleado: "
	Leer nombre
	Escribir "Salario: "
	Leer salario
	Si salario<=1000000 Entonces
		subsidio=120000
	SiNo
		subsidio=0
	Fin Si
	Escribir "Nombre empleado: ",nombre
	Escribir "Salario: ",salario
	Escribir "Subsidio de transporte: ",subsidio
FinAlgoritmo
