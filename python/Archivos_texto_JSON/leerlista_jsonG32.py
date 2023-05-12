# Programa para leer lista almacenada en un archivo json
# Autor: Sergio Medina
# Fecha: 05/07/2022

# Importar los comandos y métodos de la librería json
import json

# Apertura del archivo json en modo r (read) (lectura)
archivo_json=open("listaG32.json","r")

# Manipulación del archivo json
lista=json.load(archivo_json)

# Cerrar archivo json
archivo_json.close()

print(lista)
for i in range(len(lista)):
    print(lista[i])
