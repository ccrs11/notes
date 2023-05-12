# Programa para calcular comisiones vendedores
# Autor: Sergio Medina
# Fecha: 08/06/2022


lista_nombres=[]
lista_tipos=[]
lista_ventas=[]
lista_comisiones=[]
N=int(input("Cantidad de vendedores: "))
total_comision=0
# LLenar listas
for i in range(N):
    nombre=input("Nombre vendedor: ")
    lista_nombres.append(nombre)
    tipo=int(input("Tipo (1=Puerta a Puerta, 2=Telemercadeo, 3=Ejecutivo de ventas): "))
    lista_tipos.append(tipo)
    ventas=float(input("Valor ventas del mes: "))
    lista_ventas.append(ventas)
# Proceso lista
for i in range(N):
    if lista_tipos[i]==1:
        lista_comisiones.append(lista_ventas[i]*0.2)
    elif lista_tipos[i]==2:
        lista_comisiones.append(lista_ventas[i]*0.15)
    else:
        lista_comisiones.append(lista_ventas[i]*0.25)
    total_comision+=lista_comisiones[i]
    print("Nombre vendedor: ",lista_nombres[i])
    print("Comisión: ","{:,.2f}".format(lista_comisiones[i]))
print("Total Comisiones: ","{:,.2f}".format(total_comision))

    
