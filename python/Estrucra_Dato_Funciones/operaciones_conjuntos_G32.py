# Programa para las operaciones entre conjuntos
# Autor: Sergio Medina
# Fecha: 14/06/2022

# Dado el conjunto A de N elementos y el conjunto B de M elementos, se pide:
# 1) Llenar los conjuntos con números enteros
# 2) Realizar las operaciones generando:
#    conjunto C como la unión de A y B
#    conjunto D como la intersección entre A y B
#    conjunto E como la diferencia entre A y B
#    conjunto F como la diferencia entre B y A

A=set([])
B=set([])
#LLenar los conjuntos
N=int(input("Cantidad de elementos del conjunto A: "))
for i in range(N):
    numero=int(input("Número entero: "))
    A.add(numero)
M=int(input("Cantidad de elementos del conjunto B: "))
for j in range(M):
    numero=int(input("Número entero: "))
    B.add(numero)
#Procesar los conjuntos
C=A | B
D=A & B
E=A - B
F=B - A
print("A: ",A)
print("B: ",B)
print("C: ",C)
print("D: ",D)
print("E: ",E)
print("F: ",F)


    
