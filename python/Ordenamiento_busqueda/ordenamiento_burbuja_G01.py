# Programa para ordenamiento iterativo Burbuja tradicional
# Autor: Sergio Medina
# Fecha: 20/06/2022

lista=[]
#Funciones
def ordenamiento_burbuja(lista):
    for i in range(N-1):
        for j in range(i+1,N):
            if lista[i]<lista[j]:#si quiero descendente cambio > a <
                temp=lista[i]
                lista[i]=lista[j]
                lista[j]=temp
    return lista
#Programa principal
N=int(input("Cantidad de elementos: "))
for i in range(N):
    numero=int(input("Número entero: "))
    lista.append(numero)
#Imprimir lista sin ordenar
print("Lista original")
for i in range(N):
    print(lista[i])
#Ordenar lista
lista=ordenamiento_burbuja(lista)
#Imprimir lista ordenada
print("lista ordenada")
for i in range(N):
    print(lista[i])
