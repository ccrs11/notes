# Programa para liquidar servicio de Agua de N usuarios
# Autor: Sergio Medina
# Fecha: 02/06/2022

N=int(input("Cantidad de usuarios: "))
total_servicio=0
for i in range(N):
    codigo=int(input("Código Usuario: "))
    nombre=input("Nombre usuario: ")
    estado=input("Estado(V=Vigente,S=Suspendido): ")
    estrato=int(input("Estrato (1,2,3,4,5,6): "))
    consumo=float(input("Consumo del mes: "))
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
        valor_pagar=tarifa_basica+valor_consumo
        total_servicio=total_servicio+valor_pagar
        print("Nombre Usuario: ",nombre)
        print("Tarifa Básica: ","{:,.2f}".format(tarifa_basica))
        print("Valor Consumo: ","{:,.2f}".format(valor_consumo))
        print("Valor a Pagar: ","{:,.2f}".format(valor_pagar))
print("Total servicio Agua: ","{:,.2f}".format(total_servicio))
    

        
      
