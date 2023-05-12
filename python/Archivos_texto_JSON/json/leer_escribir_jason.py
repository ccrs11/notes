#Leer/Escribir archivo json con un diccionario
import json
archivo="diccionario_1.json"
try: 
    with open(archivo,"r") as f:
        a=json.load(f)
except FileNotFoundError:
    m={'1':'Lapiz','2':'Borrador','3':'Cuaderno'}
    with open(archivo,"w") as f:
        a=json.dump(m,f)
else:
    print(a)
    print (a['2'])
