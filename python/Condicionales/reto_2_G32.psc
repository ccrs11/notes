Algoritmo reto_2
	Escribir "Cantidad de productos: "
	Leer N
	total_compra=0
	total_iva=0
	Para x<-1 Hasta N Con Paso 1 Hacer
		Escribir "Código: "
		Leer codigo
		Escribir "Nombre: "
		Leer nombre
		Escribir "Cantidad: "
		Leer cantidad
		Escribir "Valor unitario(SIN IVA): "
		Leer valor_unitario
		Escribir "Tipo (1:Excento,2:Bienes,3:General): "
		Leer tipo
		valor_producto=cantidad*valor_unitario
		Si tipo=1 Entonces
			valor_iva=0
		SiNo
			Si tipo=2 Entonces
				valor_iva=valor_producto*0.05
			SiNo
				valor_iva=valor_producto*0.19
			Fin Si
		Fin Si
		valor_final=valor_producto+valor_iva
		total_compra=total_compra+valor_final
		total_iva=total_iva+valor_iva
		Escribir "Código: ",codigo
		Escribir "Nombre: ",nombre
		Escribir "Valor producto (SIN IVA): ",valor_producto
		Escribir "Valor producto (CON IVA): ",valor_final
	Fin Para
	Escribir "Valor total Compra: ",total_compra
	Escribir "Valor total iva: ",total_iva
FinAlgoritmo
