# Programa para calcular nota cualitativa
# Autor: Sergio Medina
# Fecha: 31/05/2022

nombre=input("Nombre estudiante: ")
cuantitativa=int(input("Nota Cuantitativa: "))
if cuantitativa<=59:
    cualitativa="D"
elif cuantitativa<=79:
    cualitativa="C"
elif cuantitativa<=89:
    cualitativa="B"
else:
    cualitativa="A"
print("Nombre estudiante: ",nombre)
print("Nota Cuantitativa: ",cuantitativa)
print("Nota Cualitativa: ",cualitativa)

    
    

