# programa para el método de ordenamiento Burbuja
# Autor: Sergio Medina
# Fecha: 17/06/2022

#Funciones

def ordenamiento_burbuja(numeros):
    for i in range (N-1):
        for j in range (i+1,N):
            if numeros[i]>numeros[j]:
                t=numeros[i]
                numeros[i]=numeros[j]
                numeros[j]=t
    return numeros

#Programa principal
N=int(input("Cantidad de elementos: "))
numeros=[]
for i in range(N):
    num=int(input("Número: "))
    numeros.append(num)
print( "Lista Numeros: ",numeros)
#Llamado a la función
numeros=ordenamiento_burbuja(numeros)
#Imprimir
for i in range(N):
    print("Numero: ",numeros[i])
  
    
