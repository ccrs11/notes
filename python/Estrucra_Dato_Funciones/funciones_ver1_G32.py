# programa para facturar abonados utilizando funciones
# Autor: Sergio Medina
# Fecha: 15/06/2022
# Funciones
def factura_abonado(estrato,impulsos):
    if estrato==1:
        tarifa_basica=10000
    elif estrato==2:
        tarifa_basica=15000
    elif estrato==3:
        tarifa_basica=20000
    elif estrato==4:
        tarifa_basica=25000
    else:
        tarifa_basica=30000
    valor_impulsos=impulsos*100
    valor_abonado=tarifa_basica+valor_impulsos
    return valor_abonado
# Programa principal
N=int(input("Cantidad de abonados: "))
total_abonados=0
for i in range(N):
    nombre=input("Nombre abonado: ")
    estrato=int(input("Estrato(1,2,3,4,5): "))
    impulsos=int(input("Impulsos del mes: "))
    # Llamdo a la función
    valor_abonado=factura_abonado(estrato,impulsos)
    total_abonados+=valor_abonado
    print("Nombre abonado: ",nombre)
    print("Valor a pagar abonado: ","{:,.2f}".format(valor_abonado))
print("Valor total a pagar abonados: ","{:,.2f}".format(total_abonados))
        
