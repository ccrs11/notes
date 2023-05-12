# Programa para calcular comisión de N vendedores
# Autor: Sergio Medina
# Fecha: 09/06/2022

lista_nombre=[]
lista_tipo=[]
lista_ventas=[]
#lista_codigo=[],lista_nombre=[], lista_cantidad=[], lista_valor_unitario=[]
#lista_tipo_iva=[]
lista_comision=[]
#lista_valor_producto=[], lista_valor_iva=[], lista_valor_final
N=int(input("Cantidad de vendedores: "))
total_comision=0
for i in range(N):
    nombre=input("Nombre Vendedor: ")
    tipo=int(input("Tipo(1:Puerta a puerta,2:Telemercadeo,3:Ejecutivo): "))
    ventas=float(input("Ventas del mes: "))
    lista_nombre.append(nombre)
    lista_tipo.append(tipo)
    lista_ventas.append(ventas)
print(len(lista_nombre))
print(len(lista_tipo))
print(len(lista_ventas))
for x in range(N):
    #valor_producto=lista_cantidad[x]*lista_valor_unitario[x]
    #lista_valor_producto.append(valor_producto)
    if lista_tipo[x]==1:
        comision=lista_ventas[x]*0.20
        #valor_iva=0
    elif lista_tipo[x]==2:
        comision=lista_ventas[x]*0.15
        #valor_iva=valor_producto*0.5
    else:
        comision=lista_ventas[x]*0.25
        #Valor_iva=
    #lista_valor_iva.append(valor_iva)
    #valor_final=valor_producto+valor_iva
    #lista_valor_final.append(valor_final)
    lista_comision.append(comision)
    total_comision+=comision
    print("Valor comisión: ",comision)
print("Total comisiones: ",total_comision)

    
    
