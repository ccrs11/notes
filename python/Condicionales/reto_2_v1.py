N=int(input())
total_ventas=0
total_iva=0
for i in range(N):
    codigo=int(input())
    nombre=input()
    cantidad=float(input())
    valor_unitario=float(input())
    tipo=int(input())
    valor_producto=cantidad*valor_unitario
    if tipo==1:
        iva=0
    elif tipo==2:
        iva=0.05
    else:
        iva=0.19
    valor_final=valor_producto+valor_producto*iva
    total_iva+=valor_producto*iva
    total_ventas+=valor_final
    print(codigo)
    print(nombre)
    print(valor_producto)
    print(valor_final)
print(total_ventas)
print(total_iva)
