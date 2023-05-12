# Programa para leer dicionario desde un archivo archivo json
# Autor: Sergio Medina
# Fecha: 05/07/2022

# Importar la libreria con los comandos y métodos de JSON
import json

# Apertura del archivo JSON
archivo_json=open("diccionario.json","r")

# Manipulación del archivo
diccionario=json.load(archivo_json)

# Cerrar archivo
archivo_json.close()

print(diccionario)
print(diccionario['2'])
