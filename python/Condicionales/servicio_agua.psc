Algoritmo servicio_agua
	Escribir "Cantidad de usuarios. "
	Leer N
	Para i=1 Hasta N Con Paso 1 Hacer
		Escribir "Código usuario: "
		Leer codigo
		Escribir "Nombre: "
		Leer nombre
		Escribir "Estado (V=Vigente,S=Supendido): "
		Leer estado
		Escribir "Estrato: (1,2,3,4,5,6): "
		Leer estrato
		Escribir "Consumo: "
		Leer consumo
		Si estado="V" Entonces
			Si estrato=1 Entonces
				tarifa_basica=10000
			SiNo
				Si estrato=2 Entonces
					tarifa_basica=20000
				SiNo
					Si estrato=3 Entonces
						tarifa_basica=30000
					SiNo
						Si estrato=4 Entonces
							tarifa_basica=45000
						SiNo
							Si estrato=5 Entonces
								tarifa_basica=60000
							SiNo
								tarifa_basica=70000
							Fin Si
						Fin Si
					Fin Si
				Fin Si
			Fin Si
			valor_consumo=consumo*200
			valor_pagar=tarifa_basica+valor_consumo
			Escribir "Nombre usuario: ",nombre
			Escribir "Tarifa Básica: ",tarifa_basica
			Escribir "Valor consumo: ",valor_consumo
			Escribir "Valor a pagar: ",valor_pagar
		Fin Si
	Fin Para
FinAlgoritmo
