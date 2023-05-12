# Programación búsqueda binaria recursiva
# Autor: Sergio Medina
# Fecha: 28/06/2022

lista=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
#Funciones
def busqueda_binaria(lista,info_buscar,izq,der):
    if der<izq:
        return -1
    else:
        med=(izq+der)//2
        if info_buscar==lista[med]:
            return med
        else:
            if info_buscar<lista[med]:
                return busqueda_binaria(lista,info_buscar,izq,med-1)
            else:
                return busqueda_binaria(lista,info_buscar,med+1,der)
#Programa principal
info_buscar=int(input("Información a buscar: "))
izq=0
der=len(lista)-1
posicion=busqueda_binaria(lista,info_buscar,izq,der)
print(lista)
if posicion==-1:
    print("La información ",info_buscar," NO se encuentra en la lista")
else:
    print("La información ",info_buscar," se encuentra en la posición ",posicion)
