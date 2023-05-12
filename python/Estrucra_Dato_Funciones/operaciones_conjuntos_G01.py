# Programa para operaciones entre conjuntos
# Autor: Sergio Medina
# Fecha: 14/06/2022

# Dados el conjunto A de N elementos enteros y el conjunto B de M elementos enteros,
# se pide:
# Generar conjunto C con la unión de A y B
# Generar conjunto D con la intersección de A y B
# Generar conjunto E con la diferencia entre A y B
# Generar conjunto F con la diferencia entre By A

A=set([])
B=set([])
#LLenar los conjuntos
N=int(input("Cantidad elementos conjunto A: "))
for i in range(N):
    numero=int(input("Número: "))
    A.add(numero)
M=int(input("Cantidad de elementos conjunto B: "))
for j in range(M):
    numero=int(input("Número: "))
    B.add(numero)
#Procesar los conjuntos
C=A|B
D=A&B
E=A-B
F=B-A
print("A: ",A)
print("B: ",B)
print("C: ",C)
print("D: ",D)
print("E: ",E)
print("F: ",F)



