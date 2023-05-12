# Programa para leer toda la información de un archivo texto
# Autor: Sergio Medina
# Fecha: 02/07/2022

import io

#Apertura del archivo
archivo_texto=open("nombres.txt","r")

#Manipulación del archivo
texto=archivo_texto.read()

#Cerra archivo
archivo_texto.close()

print(texto)
