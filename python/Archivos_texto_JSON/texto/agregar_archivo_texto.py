#Programa para agregar información en archivo texto en Python
#Autor: Sergio Medina
#Fecha: 16/06/2021

#Importar el módulo io
import io

#Fase de apertura
archivo_texto=open("nombres.txt","a")

#Fase de manipulación
nom="\nPedro Perez"
archivo_texto.write(nom)

#Fase de cierre
archivo_texto.close()









