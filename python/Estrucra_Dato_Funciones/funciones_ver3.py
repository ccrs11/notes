# Programa para manejo de funciones
# Autor: Sergio Medina
# Fecha: 15/06/2022

# Definición de las funciones
def facturacion_abonado(estrato,impulsos):
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
    return tarifa_basica,valor_impulsos,valor_abonado
def valida_entero(etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            break
        except ValueError:
            print(etiqueta," debe ser un dato entero")
    return dato
def valida_estrato(etiqueta):
    while True:
        try:
            estrato=int(input(etiqueta))
            if estrato<1 or estrato>5:
                print(etiqueta," debe estar entre 1 y 5")
                continue
            break
        except ValueError:
            print(etiqueta," debe ser un dato entero")
    return estrato
    
#Programa principal
N=valida_entero("Cantidad de abonados ")
total_abonados=0
for i in range(N):
    nombre=input("Nombre abonado: ")
    estrato=valida_estrato("Estrato(1,2,3,4,5) ")
    impulsos=valida_entero("Impulsos ")
    #Llamado o la ejecución de la función
    tarifa_basica,valor_impulsos,valor_abonado=facturacion_abonado(estrato,impulsos)
    total_abonados+=valor_abonado
    print("Nombre abonado: ",nombre)
    print("Tarifa Básica: ","{:,.2f}".format(tarifa_basica))
    print("Valor impulsos: ","{:,.2f}".format(valor_impulsos))
    print("Valor a pagar abonado: ","{:,.2f}".format(valor_abonado))
print("Toal a pagar por todos los abonados: ","{:,.2f}".format(total_abonados))

    
    
