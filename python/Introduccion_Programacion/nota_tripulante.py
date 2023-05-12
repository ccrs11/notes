#Programa para calcular nota del Ciclo 1 de un tripulante
#Autor: Sergio Medina
#Fechas: 12/04/2022

#Entrada
n1=float(input("Nota Reto 1: "))
n2=float(input("Nota Reto 2: "))
n3=float(input("Nota Reto 3: "))
n4=float(input("Nota Reto 4: "))
n5=float(input("Nota Reto 5: "))
ni=float(input("Nota Inglés: "))

#Proceso
nd=n1*0.1 + n2*0.1 + n3*0.2 + n4*0.2 + n5*0.2 + ni*0.2

#Salida
print("Nota Definitiva: ","{:,.2f}".format(nd))

