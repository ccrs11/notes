# Programa Operaciones conjuntos
# Autor: Sergio Medina
# Fecha: 18/05/2022

# Dado el conjunto A de N elementos y el conjunto B de M elementos, N y M
# suministrados, se pide realizar las operaciones de unión, intersección y
# diferencia.
#  - N y M son Suministrados
#  - LLenar los conjuntos A y B
#  - Generar los conjuntos C, D, E y F con las operaciones mencionadas
#Crear conjuntos A y B vacios
A=set([])
B=set([])
#LLenar conjunto A
N=int(input("Cantidad elementos conjunto A "))
for i in range(N):
    numero=int(input("Número "))
    A.add(numero)
#LLenar conjunto B
M=int(input("Cantidad elementos conjunto B "))
for k in range(M):
    numero=int(input("Número "))
    B.add(numero)
#Operaciones entre conjuntos
C=A | B
D=A & B
E=A - B
F=B - A
print("Conjunto A: ",A)
print("Conjunto B: ",B)
print("Conjunto C: ",C)
print("Conjunto D: ",D)
print("Conjunto E: ",E)
print("Conjunto F: ",F)


