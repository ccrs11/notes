# Programa para calcular comisiones vendedor con listas
# Autor: Sergio Medina
# Fecha: 09/06/2022
#Iniciar listas vacias
lista_nombre=[]
lista_tipo=[]
lista_ventas=[]
lista_comision=[]
N=int(input("Cantidad de vendedores: "))
total_comision=0
# Llenar listas
for i in range(N):
    nombre=input("Nombre vendedor: ")
    tipo=int(input("Tipo(1:Puerta a Puerta,2:Telemercadeo,3:Ejecutivo): "))
    ventas=float(input("Ventas del mes: "))
    lista_nombre.append(nombre)
    lista_tipo.append(tipo)
    lista_ventas.append(ventas)
print(len(lista_nombre))
print(len(lista_tipo))
print(len(lista_ventas))
# Proceso
for x in range(N):
    #valor_producto=cantidad*valor_unitario  (Ayuda)
    #valor_producto=lista_cantidad[x]*lista_valor[x]
    #lista_valor_producto.append(valor_producto)
    if lista_tipo[x]==1:
        comision=lista_ventas[x]*0.2
    elif lista_tipo[x]==2:
        comision=lista_ventas[x]*0.15
    else:
        comision=lista_ventas[x]*0.25
    lista_comision.append(comision)
    total_comision+=comision
    print("Comisión Vendedor: ",comision)
print("Total comisiones: ",total_comision)

    
