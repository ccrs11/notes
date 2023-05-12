# Programa para calcular subsidio de transporte
# Autor. Sergio Medina
# Fecha: 31/05/2022

nombre=input("Nombre empleado: ")
salario=float(input("Salario: "))
if salario<=1000000:
    subsidio=120000
else:
    subsidio=0
print("Nombre empleado: ",nombre)
print("Salario: ","{:,.2f}".format(salario))
print("Subsidio de transporte: ","{:,.2f}".format(subsidio))



    
    

    

    
    
    
    

    

