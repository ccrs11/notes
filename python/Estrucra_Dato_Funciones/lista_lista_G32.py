# Programa para manejar listas dentro de listas
# Autor: Sergio Medina
# Fecha: 13/06/2022

lista=[]
cantidad_pares=0
cantidad_impares=0
#LLenar lista dentro de lista
for i in range(2):
    lista.append([])
    for j in range(2):
        numero_entero=int(input("Número entero: "))
        lista[i].append(numero_entero)
print(lista)
#Procesar lista dentro de lista
for x in range(2):
    for y in range(2):
        if lista[x][y]%2==0:
            cantidad_pares+=1
        else:
            cantidad_impares+=1
print("Cantidad de pares: ",cantidad_pares)
print("Cantidad de impares: ",cantidad_impares)

