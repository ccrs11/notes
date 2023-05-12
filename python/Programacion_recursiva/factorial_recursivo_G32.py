# Programa del Factorial CON recursividad
# Autor: Sergio Medina
# Fecha: 27/06/2022

#Funciones
def factorial(numero):
    if numero==0 or numero==1:
        return 1
    else:
        return numero*factorial(numero-1)

#numero=4
#fact=4*factorial(3)
#   = 4*3*factorial(2)
#   = 4*3*2*factorial(1)
#   = 4*3*2*1

#Programa principal
numero=int(input("Número entero: "))
fact=factorial(numero)
print("El factorial del número ",numero," es ",fact)
