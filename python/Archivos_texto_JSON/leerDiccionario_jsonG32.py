# Programa para leer un diccionario desde un archivo json
# Autor: Sergio Medina
# Fecha: 05/07/2022

# Importar los comandos y métodos de la librería json
import json

# Apertura del archivo json en modo r (read) (lectura)
archivo_json=open("diccionarioG32.json","r")

# Manipulación del archivo json
diccionario=json.load(archivo_json)

# Cerrar archivo
archivo_json.close()

print(diccionario)
print(diccionario.get('nombre'))
