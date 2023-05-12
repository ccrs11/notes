#Programa para la búsqueda lineal o secuencial
#Autor: Sergio Medina
#Fecha: 17/06/2022

#Funciones
def busqueda_lineal(vector,info_buscar):
    for i in range(len(vector)):
        if info_buscar==vector[i]:
            return i
    return -1

#Programa principal
N=int(input("Cantidad de elementos: "))
vector=[]
for i in range(N):
    num=int(input("Número: "))
    vector.append(num)
print("Lista: ",vector)
info_buscar=int(input("Información a buscar: "))
#LLamado o ejecución de la función
pos=busqueda_lineal(vector,info_buscar)
if pos==-1:
    print("Información NO encontrada")
else:
    print("Información encontrada en la posición: ",pos)






        
        
        
    
