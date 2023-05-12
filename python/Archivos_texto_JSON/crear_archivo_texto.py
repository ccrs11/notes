# Programa para crear un archivo texto
# Autor: Sergio Medina
# Fecha: 02/07/2022

# Importar la libreria io
import io
# Apertura en modo creación de archivo
archivo_texto=open("nombres.txt","w")
# Manipulación del archivo
nom="Sergio Medina\nLuisa Lane\nMaria Medina"
archivo_texto.write(nom)
# Cerrar el erchivo
archivo_texto.close()

print("Proceso Finalizado")



