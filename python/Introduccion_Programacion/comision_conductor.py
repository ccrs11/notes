#Programa valor a pagar a conductor de servicio inter municipal
#Autor: Sergio Medina
#Fecha: 12/04/2022

#Entrada
nombre=input("Nombre Conductor: ")
placa=input("Placa Vehículo: ")
valor_pasajes=float(input("Valor total pasajes: "))
valor_encomiendas=float(input("Valor total encomiendas: "))

#Proceso
comision_pasajes=valor_pasajes * 0.25
comision_encomiendas=valor_pasajes * 0.15
comision_total=comision_pasajes + comision_encomiendas

#Salida
print("Conductor: ",nombre)
print("Placa vehiculo: ",placa)
print("Valor pasajes: ","{:,.2f}".format(valor_pasajes))
print("Valor encomiendas: ","{:,.2f}".format(valor_encomiendas))
print("Valor comisión  pasajes: ","{:,.2f}".format(comision_pasajes))
print("Valor comisión encomiendas: ","{:,.2f}".format(comision_encomiendas))
print("Valor comisión Total: ","{:,.2f}".format(comision_total))


