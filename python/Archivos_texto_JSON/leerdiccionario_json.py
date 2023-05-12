#Programa leer json de diccionario

import json
archivo_json=open("diccionario.json","r")
diccionario=json.load(archivo_json)
archivo_json.close()
print(diccionario)
print(diccionario['2'])

