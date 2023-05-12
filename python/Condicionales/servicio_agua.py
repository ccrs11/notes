#Programa para liquidación servicio de AGUA
#Autor: Sergio Medina
#Fecha: 29/04/2022

N=int(input("Cantidad de Usuarios: "))
for i in range(N):
    codigo=int(input("Código Usuario: "))
    nombre=input("Nombre: ")
    estado=input("Estado (V=Vigente, S=Suspendido): ")
    estrato=int(input("Estrato (1,2,3,4o 5): "))
    consumo=int(input("Consumo (cm3): "))
    if estado=="V":
        if estrato==1:
            tarifa_basica=10000
        elif estrato==2:
            tarifa_basica=20000
        elif estrato==3:
            tarifa_basica=30000
        elif estrato==4:
            tarifa_basica=45000
        elif estrato==5:
            tarifa_basica=60000
        else:
            tarifa_basica=70000
        valor_consumo=consumo*200
        valor_servicio=tarifa_basica+valor_consumo
        print("Nombre Usuario: ",nombre)
        print("Valor Servicio: ",'{:,.2f}'.format(valor_servicio))

    
