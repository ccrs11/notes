# Programa para el factorial de un número SIN recursividad
# Autor: Sergio Medina
# Fecha: 27/06/2022

#Funciones
def factorial(numero):
    if numero==0 or numero==1:
        return 1
    else:
        fact=1
        for i in range(numero,1,-1):
            fact*=i
        return fact
#Programa principal
numero=int(input("Número: "))
fact=factorial(numero)
print("El factorial de ",numero," es ",fact)


        
            
