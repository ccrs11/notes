# Programa para la búsqueda binaria
# Autor: Sergio Medina
# Fecha: 22/06/2022

lista=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
#Funciones
def busqueda_binaria(lista,info_buscar):
    izq=0
    der=len(lista)-1
    while izq<=der:
        med=(izq+der)//2
        if info_buscar==lista[med]:
            return med
        elif info_buscar<lista[med]:
            der=med-1
        else:
            izq=med+1
    return -1
#Programa principal
info_buscar=int(input("Información a buscar: "))
posicion=busqueda_binaria(lista,info_buscar)
print(lista)
if posicion==-1:
    print("La información ",info_buscar," NO se encuentra en la lista")
else:
    print("La información ",info_buscar," se encuentra en la posición ",posicion)


            
        
