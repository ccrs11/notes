# Programa para leer línea a línea un archivo texto
# Autor: Sergio Medina
# Fecha: 02/07/2022

import io

# Apertura del archivo
archivo_texto=open("nombres.txt","r")

# Manipulación del archivo
lista_nombres=archivo_texto.readlines()

# Cierre del archivo
archivo_texto.close()

print(lista_nombres)
for i in range(len(lista_nombres)):
    print(lista_nombres[i])
    

