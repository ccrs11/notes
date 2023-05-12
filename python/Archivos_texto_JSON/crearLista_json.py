#Programa crear json de lista

import json
archivo_json=open("lista.json","w")
lista=[1,2,3,4,5,6,7,8]
json.dump(lista,archivo_json)
archivo_json.close()
print("Proceso finalizado")
