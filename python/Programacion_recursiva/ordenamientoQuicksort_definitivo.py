# Programa para el ordenamiento QuickSort 
# Autor: Sergio Medina
# fecha: 26/06/2022

#Funciones
def particion(lista):
    pivote=lista[0]
    menores=[]
    mayores=[]
    for i in range(1,len(lista),1):
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
lista=[8,1,5,14,4,15,12,6,2,11,10,7,9]
print("Lista original: ",lista)
#llamado a la función QuickSort
lista=quicksort(lista)
print("lista ordenada: ",lista)





        
        
    
