# Programa para contar vocales utilizando listas
# Autor: Sergio Medina
# Fecha: 03/06/2022

lista=[]
N=int(input("Cantidad de letras: "))
can_a=0
can_e=0
can_i=0
can_o=0
can_u=0
# LLenar la lista
for i in range(N):
    letra=input("Letra: ")
    lista.append(letra)
# Proceso Lista
for x in lista:
    if x=="a" or x=="A":
        can_a+=1
    elif x=="e" or x=="E":
        can_e+=1
    elif x=="i" or x=="I":
        can_i+=1
    elif x=="o" or x=="O":
        can_o+=1
    elif x=="u" or x=="U":
        can_u+=1
print("Cantidad de a: ",can_a)
print("Cantidad de e: ",can_e)
print("Cantidad de i: ",can_i)
print("Cantidad de o: ",can_o)
print("Cantidad de u: ",can_u)

