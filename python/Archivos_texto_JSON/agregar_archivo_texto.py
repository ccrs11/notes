# Programa para agregar registros a ub archivo texto
# Autor: Sergio Medina
# Fecha: 02/07/2022

import io

# Apertura del archivo
archivo_texto=open("nombres.txt","a")

# Manipulación del archivo (Agregar registros)
nom="\nIvan Castillo"
archivo_texto.write(nom)

# Cerrar archivo
archivo_texto.close()

print("Proceso Finalizado")


