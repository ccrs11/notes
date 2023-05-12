# Programa para crear archivo JSON desde una lista
# Autor: Sergio Medina
# Fecha: 05/07/2022

# Librería de comandos y métodos de JSON
import json

# Apertura del archivo JSON en modo escritura (w) (Crear ael archvo)
archivo_json=open("lista.json","w")

# Manipulación del archivo
lista=["Sergio","Luisa","Maria","Juan"]
json.dump(lista,archivo_json)

# Cerrar el archivo JSON
archivo_json.close()

print("Proceso finalizado")

