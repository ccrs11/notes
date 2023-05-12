# Programa para calcular comisiones vendedor
# Autor: Sergio Medina
# Fecha: 09/06/2022

N=int(input("Cantidad de vendedores: "))
total_comision=0
for i in range(N):
    nombre=input("Nombre vendedor: ")
    tipo=int(input("Tipo(1:Puerta a Puerta,2:Telemercadeo,3:Ejecutivo): "))
    ventas=float(input("Ventas del mes: "))
    if tipo==1:
        comision=ventas*0.2
    elif tipo==2:
        comision=ventas*0.15
    else:
        comision=ventas*0.25
    total_comision+=comision
    print("Comisión Vendedor: ",comision)
print("Total comisiones: ",total_comision)

    
