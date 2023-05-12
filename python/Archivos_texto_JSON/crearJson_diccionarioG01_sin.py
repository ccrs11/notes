import json
archivo_json=open("datos.json","w")
datos={'1':"Leche",'2':"Chocolate",'3':"Azucar",'4':"Arroz"}
json.dump(datos,archivo_json)
archivo_json.close()
print("Proceso finalizado")
