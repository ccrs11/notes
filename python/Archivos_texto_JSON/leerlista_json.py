#Programa crear json de diccionario

import json
archivo_json=open("lista.json","r")
lista=json.load(archivo_json)
archivo_json.close()
print(lista)
for i in range(len(lista)):
    print(lista[i])

