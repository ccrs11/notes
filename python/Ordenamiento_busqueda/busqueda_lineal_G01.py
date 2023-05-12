# Programa para la búsqueda secuencial o lineal
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
    numero=int(input("Número entero: "))
    lista.append(numero)
print(lista)
if busqueda_lineal(lista,info_buscar)==-1:
    print("El elemento ",info_buscar," No está en la lista")
else:
    print("El elemento ",info_buscar," está en la posición ",busqueda_lineal(lista,info_buscar))
   
