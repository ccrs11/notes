# Programa para contar vocales de una lista
# Autor: Sergio Medina
# Fecha: 08/06/2022

#iniciar lista como vacias
lista_letras=[]
N=int(input("Cantidad de letras: "))
cantidad_a=0
cantidad_e=0
cantidad_i=0
cantidad_o=0
cantidad_u=0
#LLenar lista
for i in range(N):
    letra=input("Letra: ")
    lista_letras.append(letra)
print("Lista letras: ",lista_letras)
#Procesar lista
for x in range(N):
    if lista_letras[x]=="a" or lista_letras[x]=="A":
        cantidad_a+=1
    elif lista_letras[x]=="e" or lista_letras[x]=="E":
        cantidad_e+=1
    elif lista_letras[x]=="i" or lista_letras[x]=="I":
        cantidad_i+=1
    elif lista_letras[x]=="o" or lista_letras[x]=="O":
        cantidad_o+=1
    elif lista_letras[x]=="u" or lista_letras[x]=="U":
        cantidad_u+=1
print("Cantidad de a: ",cantidad_a)
print("Cantidad de e: ",cantidad_e)
print("Cantidad de i: ",cantidad_i)
print("Cantidad de o: ",cantidad_o)
print("Cantidad de u: ",cantidad_u)

        
