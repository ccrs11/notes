# Programa para crear archivo json - partiendo de un Lista
# Autor: Sergio Medina
# Fecha: 17/06/2021

import json

# Estructura de datos (Lista)
lista=[10,20,30,40,60]

# Fase de apertura y creación
with open("lista.json","w") as archivo:
    json.dump(lista,archivo)

# Fase de cierre
archivo.close()

    

