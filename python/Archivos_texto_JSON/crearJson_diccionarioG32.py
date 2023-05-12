# Programa para crear arhivo json desde un diccionario
# Autor: Sergio Medina
# Fecha: 06/07/2022

# importar librería con comandos y métodos de json
import json

# Apertura en  mode w (write)(escritura) para crear archivo
archivo_json=open("diccionarioG32.json","w")

# Manipulación del archivo json
diccionario={'nombre':"Sergio Medina",'direccion':"calle 20 # 30-40",'edad':57}
json.dump(diccionario,archivo_json)

# Cerrar el archivo
archivo_json.close()


print("Proceso finalizado")
