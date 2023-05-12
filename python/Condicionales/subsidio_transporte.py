#Programa para calcular el subsidio de transporte de un empleado
#Autor: Sergio Medina
#Fecha: 22/04/2022
#Entradas
nombre = input("Ingrese su nombre: ")
salario = float(input("Ingrese el salario: "))

#Proceso
if salario <= 1000000:
    st = 120000
else:
    st = 0


#Salida
print("Nombre empelado: ",nombre)
print("Salario: ",'{:,.2f}' . format(salario))
print("Subsidio de transporte: ",'{:,.2f}' . format(st))

