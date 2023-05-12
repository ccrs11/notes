#Programa Pares e Impares
#Autor: Sergio Medina
#Fecha: 29/04/2022

cantidad_pares=0
cantidad_impares=0
num=int(input("Número: ")) # Leer el primero
while num!=-1:
    if num%2==0:
        print("El número ",num," es PAR")
        cantidad_pares+=1
    else:
        print("El número ",num," es IMPAR")
        cantidad_impares+=1
    num=int(input("Número: ")) #Leer el siguiente
print("Cantidad de pares: ",cantidad_pares)
print("Cantidad de impares: ",cantidad_impares)
