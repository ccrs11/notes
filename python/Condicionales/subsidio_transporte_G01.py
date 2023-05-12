# Programa para calcular el subsidio de transporte
# Autor: Sergio Medina
# Fecha: 31/05/2022

# Entrada
nombre=input("Nombre empleado: ")
salario=float(input("Salario: "))
# Proceso
if salario<=1000000:
    subsidio=120000
else:
    subsidio=0
#Salida
print("Nombre empleado: ",nombre)
print("Salario: ","{:,.2f}".format(salario))
print("Subsidio de transporte: ","{:,.2f}".format(subsidio))


    

    
    
    

