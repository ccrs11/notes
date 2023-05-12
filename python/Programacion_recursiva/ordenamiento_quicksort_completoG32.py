# Programa para el método Quicksort (Parte 1: Partición)
# Autor: sergio Medina
# fecha: 28/06/2022

lista=[8,1,5,14,4,15,12,6,2,11,10,7,9]
def particion(lista):
    menores=[]
    mayores=[]
    pivote=lista[0]
    for i in range(1,len(lista)):
        if lista[i]<pivote:
            menores.append(lista[i])
        else:
            mayores.append(lista[i])
    return menores,pivote,mayores
def quicksort(lista):
    if len(lista)<2:
        return lista
    else:
        menores,pivote,mayores=particion(lista)
        return quicksort(menores)+[pivote]+quicksort(mayores)
#Programa principal
print("Lista original: ",lista)
print("Lista ordenada: ",quicksort(lista))


    
