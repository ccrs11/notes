#Programa crear json de diccionario

import json
archivo_json=open("diccionario.json","w")
diccionario={1:"Leche",2:"Azucar",3:"Chocolate",4:"CAFE"}
json.dump(diccionario,archivo_json)
archivo_json.close()
print("Proceso finalizado")
