#Programa para crear archivo texto en Python
#Autor: Sergio Medina
#Fecha: 16/06/2021

#Importar el módulo io
import io

#Fase de creación y apertura
archivo_texto=open("nombres.txt","w")

#Fase de manipulación
nom="Sergio Medina \nLuisa Ruiz \nMario Moreno"
archivo_texto.write(nom)

#Fase de cierre
archivo_texto.close()




