#Programa para la busqueda binaria
#Autor: Sergio Medina
#Fecha:17/06/2022

def busqueda_binaria(lista,elemento):
    izq=0
    der=len(lista)-1
    
    while izq<=der:
        med=(izq+der)//2
       
        if lista[med]==elemento:
            return med
        elif lista[med]>elemento:
            der=med-1
        else:
            izq=med+1
    return -1

lista=[1,2,3,4,5,6,7,8,9,10]
print("Lista ordenada: ",lista)
elemento=int(input("Elemento: "))
if busqueda_binaria(lista,elemento)==-1:
    print("Elemento no encontrado en la lista")
else:
    print("Posición elemento: ",busqueda_binaria(lista,elemento))
  
