import json
archivo_json=open("datos.json","w")
datos=["Sergio","Luisa","Maria","Juan","Hugo"]
json.dump(datos,archivo_json)
archivo_json.close()
print("Proceso finalizado")



