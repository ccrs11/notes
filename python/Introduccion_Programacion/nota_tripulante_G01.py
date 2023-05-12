# Programa para calcular la nota definitiva de un tripulante
# Autor: Sergio Medina
# Fecha: 26/05/2022

#Entrada
nombre=input("Nombre tripulante: ")
nr1=float(input("Nota Reto 1: "))
nr2=float(input("Nota Reto 2: "))
nr3=float(input("Nota Reto 3: "))
nr4=float(input("Nota Reto 4: "))
nr5=float(input("Nota Reto 5: "))
ni=float(input("Nota Inglés: "))
#Proceso
definitiva=(nr1*0.1)+(nr2*0.1)+(nr3*0.2)+(nr4*0.2)+(nr5*0.2)+(ni*0.2)
#Salida
print("Nombre tripulante: ",nombre)
print("Nota definitiva: ","{:,.1f}".format(definitiva))



