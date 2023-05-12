# Programa para la búsqueda lineal
# Autor: Sergio Medina
# Fecha: 21/06/2022

lista=[]
#Funciones
def busqueda_lineal(lista,info_buscar):
    for i in range(len(lista)):
        if info_buscar==lista[i]:
            return i
    return -1
#Programa principal
N=int(input("Cantidad de elementos: "))
info_buscar=int(input("Información a buscar: "))
for i in range(N):
    numero=int(input("Número: "))
    lista.append(numero)
print(lista)
if busqueda_lineal(lista,info_buscar)==-1:
    print("La información ",info_buscar," NO se encontró")
else:
    print("La información ",info_buscar, " se encuentra en la posición ",busqueda_lineal(lista,info_buscar))

    
    
            
