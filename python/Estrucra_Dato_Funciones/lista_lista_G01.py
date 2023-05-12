# Programa para manejo de listas dentro de listas(Matrices)
# Autor: Sergio Medina
# Fecha: 13/06/2022

matriz=[]
cantidad_pares=0
cantidad_impares=0
#llenar lista dentro lista
for i in range(2):
    matriz.append([])
    for k in range(2):
        numero=int(input("Número entero: "))
        matriz[i].append(numero)
print(matriz)
#Procesar
for x in range(2):
    for y in range(2):
        if matriz[x][y]%2==0:
            cantidad_pares+=1
        else:
            cantidad_impares+=1
print("Cantidad de Pares: ",cantidad_pares)
print("Cantidad de Impares: ",cantidad_impares)

    
