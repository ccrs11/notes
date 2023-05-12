# Programa para leer una lista almacenada en archivo JSON
# Autor: Sergio Medina
# Fecha: 05/07/2022

# Importar librería con los comandos y métodos JSON
import json

# Apertura del archivo JSON
archivo_json=open("lista.json","r")

# Manipulación del archivo
lista=json.load(archivo_json)

# Cerrar el archivo
archivo_json.close()

print(lista)
for i in range(len(lista)):
    print(lista[i])
