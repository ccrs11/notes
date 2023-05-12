# Programa para calcular el factorial SIN recursividad
# Autor: Sergio Medina
# Fecha: 16/06/2021

# Funciones
def factorial(numero):
    if numero==0 or numero==1:
        return 1
    else:
        fact=1
        for i in range(numero,1,-1):
            fact=fact*i
        return fact

# Programa principal
numero=int(input("Ingrese número: "))
# LLamado a la función
fact=factorial(numero)
print("Factorial: ",fact)
