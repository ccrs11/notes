# Programa para crear archivo JSON desde un diccionario
# Autor: Sergio Medina
# Fecha: 05/07/2022

# importar libreria json: comandos y métodos
import json

# Apertura en modo creación de archivo (w)
archivo_json=open("diccionario.json","w")

# Manipulación del archivo
diccionario={'1':"Leche",'2':"Chocolate",'3':"Azucar",'4':"Arroz"}
json.dump(diccionario,archivo_json)

# Cerrar el erchivo JSON
archivo_json.close()

print("Proceso finalizado")
