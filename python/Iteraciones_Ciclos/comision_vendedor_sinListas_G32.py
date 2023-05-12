# Programa para calcular comisión de N vendedores
# Autor: Sergio Medina
# Fecha: 09/06/2022

N=int(input("Cantidad de vendedores: "))
total_comision=0
for i in range(N):
    nombre=input("Nombre Vendedor: ")
    tipo=int(input("Tipo(1:Puerta a puerta,2:Telemercadeo,3:Ejecutivo): "))
    ventas=float(input("Ventas del mes: "))
    if tipo==1:
        comision=ventas*0.20
    elif tipo==2:
        comision=ventas*0.15
    else:
        comision=ventas*0.25
    total_comision+=comision
    print("Valor comisión: ",comision)
print("Total comisiones: ",total_comision)

    
    
