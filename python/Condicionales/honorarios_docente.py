#Programa para liquidación honorarios docente
#Autor: Sergio Medina
#Fecha: 29/04/2022

N=int(input("Cantidad de docentes: "))
total_honorarios=0
contador_catA=0
contador_catB=0
contador_catC=0
for i in range(N):
    documento=int(input("Documento de identidad: "))
    nombre=input("Nombre: ")
    categoria=input("Categoría (A,B, C): ")
    horas=int(input("Horas laboradas en el mes: "))
    if categoria=="A":
        valor_honorarios=horas*25000
        contador_catA+=1
    elif categoria=="B":
        valor_honorarios=horas*35000
        contador_catB+=1
    else:
        valor_honorarios=horas*50000
        contador_catC+=1
    total_honorarios+=valor_honorarios
    print("Nombre docente: ",nombre)
    print("Valor honorarios: ",'{:,.2f}'.format(valor_honorarios))
print("Valor total honorarios: ",'{:,.2f}'.format(total_honorarios))
print("Cantidad de docentes categoría A: ",contador_catA)
print("Cantidad de docentes categoría B: ",contador_catB)
print("Cantidad de docentes categoría C: ",contador_catC)

