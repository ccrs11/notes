# Programa para contar vocales de una lista
# Autor: Sergio Medina
# Fecha: 08/06/2022

#Iniciar lista vacia
lista_letras=[]
N=int(input("Cantidad de letras: "))
cantidad_a=0
cantidad_e=0
cantidad_i=0
cantidad_o=0
cantidad_u=0
for i in range(N):
    letra=input("Letra: ")
    lista_letras.append(letra)
print(lista_letras)
for x in lista_letras:
    if x=="a" or x=="A":
        cantidad_a+=1
    elif x=="e" or x=="E":
        cantidad_e+=1
    elif x=="i" or x=="I":
        cantidad_i+=1
    elif x=="o" or x=="O":
        cantidad_o+=1
    elif x=="u" or x=="U":
        cantidad_u+=1
print("Cantidad de a: ",cantidad_a)
print("Cantidad de e: ",cantidad_e)
print("Cantidad de i: ",cantidad_i)
print("Cantidad de o: ",cantidad_o)
print("Cantidad de u: ",cantidad_u)

        
        
    
    

    
