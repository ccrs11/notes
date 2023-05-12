Algoritmo servicio_agua
	Escribir "Cantidad de usuarios: "
	Leer N
	total_servicio=0
	Para i<-1 Hasta N Con Paso 1 Hacer
		Escribir "Código usuario: "
		Leer codigo
		Escribir "Nombre usuario: "
		Leer nombre
		Escribir "Estado(V:Vigente, S:Suspendido): "
		Leer estado
		Escribir "Estrato (1,2,3,4,5,6): "
		Leer estrato
		Escribir "Consumo del mes: "
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
			total_servicio=total_servicio+valor_pagar
			Escribir "Nombre usuario: ",nombre
			Escribir "Tarifa Básica: ",tarifa_basica
			Escribir "Valor Consumo: ",valor_consumo
			Escribir "Valor a Pagar: ",valor_pagar
		Fin Si
	Fin Para
	Escribir "Total servicio de Agua: ",total_servicio
FinAlgoritmo
