#Programa para convertir nota cuantitativa a cualitativa
#Autor: Sergio Medina
#Fecha: 22/04/2022

#Entrada
nombre=input("Nombre Estudiante: ")
eva_cuantitativa=int(input("Nota Cuantitativa: "))

#Proceso
if eva_cuantitativa<=59:
    eva_cualitativa="D"
elif eva_cuantitativa<=79:
    eva_cualitativa="C"
elif eva_cuantitativa<=89:
    eva_cualitativa="B"
else:
    eva_cualitativa="A"

#Salida
print("Nombre estudiante: ",nombre)
print("Nota Cuantitativa: ",eva_cuantitativa)
print("Nota Cualitativa: ",eva_cualitativa)
    
    
