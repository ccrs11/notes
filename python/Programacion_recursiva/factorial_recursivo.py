#Programa para el calculo del factorial con recursividad
#Autor: Sergio Medina
#Fecha: 26/06/2022

#Funciones
def factorial_recursivo(numero):
    if numero==0 or numero==1:
        return 1
    else:
        return numero*factorial_recursivo(numero-1)
def valida_entero(etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            break
        except ValueError:
            print(etiqueta," debe ser dato ENTERO")
    return dato
#Programa principal
numero=valida_entero("Ingrese Número: ")
fact=factorial_recursivo(numero)
print("Factorial: ",fact)

#numero=3
# 3*factorial_recursivo(2)
# 3*2*factorial_recursivo(1)
# 3*2*1



        
            
