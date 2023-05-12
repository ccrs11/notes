#Programa para leer TODO archivo texto en Python
#Autor: Sergio Medina
#Fecha: 16/06/2021

#Importar el módulo io
import io

#Fase de apertura
archivo_texto=open("nombres.txt","r")

#Fase de manipulación
texto=archivo_texto.read()

#Fase de cierre
archivo_texto.close()

print(texto)









