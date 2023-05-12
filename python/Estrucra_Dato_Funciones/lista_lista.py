# Programa de listas dentro de listas
# Autor: Sergio Medina
# Fecha: 15/05/2022

#llenar la lista dentro de lista (matriz)
numeros=[]
for i in range(2):
    numeros.append([])
    for j in range(2):
        numeros[i].append(int(input("Número: ")))
#Imprimir lista dentro de lista (matriz)
print(numeros)
#Procesar lista dentro de lista
cpares=0
cimpares=0
for i in range(2):
    for j in range(2):
        if numeros[i][j]%2==0:
            cpares+=1
        else:
            cimpares+=1
print("Cantidad de pares: ",cpares)
print("Cantidad de impares: ",cimpares)
            
