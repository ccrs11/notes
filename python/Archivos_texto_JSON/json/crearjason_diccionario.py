# Programa para crear archivo json - partiendo de un Diccionario
# Autor: Sergio Medina
# Fecha: 17/06/2021

import json

# Estructura de datos (Diccionario)
diccionario={'1':'Lapiz','2':'Borrador','3':'Cuaderno','4':'Lapicero'}

# Fase de apertura y creación
with open("diccionario.json","w") as archivo:
    json.dump(diccionario,archivo)

#Fase de Cierre
archivo.close()

  

