Algoritmo Reto_2
	Escribir "Cantidad de productos: "
	Leer N
	total_iva=0
	total_compra=0
	Para x<-1 Hasta N Con Paso 1 Hacer
		Escribir "Código producto: "
		Leer codigo
		Escribir "Nombre: "
		Leer nombre
		Escribir "Cantidad: "
		Leer cantidad
		Escribir "Valor Unitario: "
		Leer valor_unitario
		Escribir "Tipo IVA (1,2,3): "
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
		total_iva=total_iva+valor_iva
		total_compra=total_compra+valor_final
		Escribir "Código producto: ",codigo
		Escribir "Nombre producto: ",nombre
		Escribir "Valor (sin IVA): ",valor_producto
		Escribir "Valor (con IVA): ",valor_final
	Fin Para
	Escribir "Total IVA: ",total_iva
	Escribir "Total Compra: ",total_compra
FinAlgoritmo
