#Programa para leer línea a línea archivo texto en Python
#Autor: Sergio Medina
#Fecha: 16/06/2021

#Importar el módulo io
import io

#Fase de apertura
archivo_texto=open("nombres.txt","r")

#Fase de manipulación
lista_nombres=archivo_texto.readlines()

#Fase de cierre
archivo_texto.close()

print(lista_nombres)

for i in range(len(lista_nombres)):
        print ("Nombre: ",lista_nombres[i])








