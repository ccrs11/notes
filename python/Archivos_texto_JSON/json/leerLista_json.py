# Programa para recuperar información de un archivo jason (Lista)
# Autor: sergio Medina
# Fecha: 17/06/2021

import json

with open("lista.json","r") as archivo:
    lista=json.load(archivo)

archivo.close()

print("Lista: ",lista)

for i in range(len(lista)):
    print(lista[i])


    
    
