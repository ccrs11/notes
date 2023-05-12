# Programa Quicksort - Completo
# Autor: Sergio Medina
# Fecha: 28/06/2022
lista=[8,1,5,14,4,15,12,6,2,11,10,7,9]
#Funciones
def particion(lista):
    izquierda=[]
    derecha=[]
    pivote=lista[0]
    for i in range(1,len(lista)):
        if lista[i]<pivote:
            izquierda.append(lista[i])
        else:
            derecha.append(lista[i])
    return izquierda,pivote,derecha
def quicksort(lista):
    if len(lista)<2:
        return lista
    else:
        izquierda,pivote,derecha=particion(lista)
        return quicksort(izquierda)+[pivote]+quicksort(derecha)

    
#Programa principal
print("Lista inicial: ",lista)
print("Lista ordenada: ",quicksort(lista))


