# Programa para manejo de diccionarios
# Autor: Sergio Medina
# Fecha: 14/06/2022

diccionario_categoria={1:25000,2:30000,3:40000,4:45000,5:60000}
N=int(input("Cantidad de docentes: "))
total_honorarios=0
for i in range(N):
    cedula=int(input("Cédula docente: "))
    nombre=input("Nombre docentes: ")
    categoria=int(input("Categoría: "))
    horas=int(input("Horas laboradas en mes: "))
    honorarios=horas*diccionario_categoria.get(categoria)
    total_honorarios+=honorarios
    print("Nombre docente: ",nombre)
    print("Honorarios: ",honorarios)
print("Total Honorarios: ",total_honorarios)

