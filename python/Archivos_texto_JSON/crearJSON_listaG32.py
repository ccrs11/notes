# Programa para crear archivo json desde una lista
# Autor: Sergio Medina
# Fecha: 05/07/2022

# Importar la librería con comandos y métodos de json
import json

# Apertura del archivo json en modo w (wite) (escritura)
archivo_json=open("listaG32.json","w")

# Manipulación del archivo json
lista=["Sergio","Luisa","Maria","Juan","Hugo"]
json.dump(lista,archivo_json)

# Cerrar archivo
archivo_json.close()

print("Proceso finalizado")



