# Programa para manejo de diccionarios
# Autor: Sergio Medina
# Fecha: 14/05/2022

# Diccionarios
lista_categoria={1:25000,2:30000,3:40000,4:45000,5:60000}

N=int(input("cantidad de docentes: "))
total_honorarios=0
for i in range(N):
    cedula=int(input("Cédula Docente: "))
    nombre=input("Nombre Docente: ")
    categoria=int(input("Categoría: "))
    horas=int(input("Horas laboradas mes: "))
    honorarios=horas*lista_categoria.get(categoria)
    total_honorarios+=honorarios
    print("Nombre docente: ",nombre)
    print("Valor honorarios: ","{:,.2f}".format(honorarios))
print("Valor total honorarios: ","{:,.2f}".format(total_honorarios))
    
