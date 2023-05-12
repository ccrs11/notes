# Programa para calcular nota Cualitativa
# Autor: Sergio Medina
# Fecha: 31/05/2022

nombre=input("Nombre estudiante: ")
nota_cuantitativa=int(input("Nota Cuantitativa: "))
if nota_cuantitativa<=59:
    nota_cualitativa="D"
elif nota_cuantitativa<=79:
    nota_cualitativa="C"
elif nota_cuantitativa<=89:
    nota_cualitativa="B"
else:
    nota_cualitativa="A"
print("Nombre estudiante: ",nombre)
print("Nota Cuantitativa:",nota_cuantitativa)
print("Nota Cualitativa: ",nota_cualitativa)


