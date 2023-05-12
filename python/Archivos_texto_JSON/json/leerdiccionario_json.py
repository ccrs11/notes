# Programa para recuperar información de un archivo jason (Diccionario)
# Autor: sergio Medina
# Fecha: 17/06/2021

import json

with open("diccionario.json","r") as archivo:
    diccionario=json.load(archivo)

archivo.close()

print("Diccionario: ",diccionario)

print(diccionario["3"])
for x in diccionario:
    print(diccionario.get(x))

      


    
    
