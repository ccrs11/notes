# Programa para el ordenamiento método Burbuja tradicional
# Autor: Sergio Medina
# Fecha: 20/06/2022

lista=[]
# Funciones
def ordenamiento_burbuja(lista):
    for i in range(N-1):
        for j in range(i+1,N):
            if lista[i]>lista[j]:  #Descendente lista[i]<lista[j]
                temp=lista[i]
                lista[i]=lista[j]
                lista[j]=temp
    return lista
#Programa principal
#Llenar la lista
N=int(input("Cantidad de elementos: "))
for x in range(N):
    numero=int(input("Número entero: "))
    lista.append(numero)
#Imprimir lista
print("Lista original")
for x in range(N):
    print(lista[x])
#Ordenamiento método burbuja
lista=ordenamiento_burbuja(lista)
#Imprimir lista
print("Lista ordenada")
for x in range(N):
    print(lista[x])
    
