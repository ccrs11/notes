def ordenamiento_burbuja(N,codigo,cantidad,iva,valor_producto,valor_final):
    for i in range(0,N-1):
        for j in range(i+1,N):
            if codigo[i]>codigo[j]:
                t=codigo[i]
                codigo[i]=codigo[j]
                codigo[j]=t
                t=cantidad[i]
                cantidad[i]=cantidad[j]
                cantidad[j]=t
                t=iva[i]
                iva[i]=iva[j]
                iva[j]=t
                t=valor_producto[i]
                valor_producto[i]=valor_producto[j]
                valor_producto[j]=t
                t=valor_final[i]
                valor_final[i]=valor_final[j]
                valor_final[j]=t
    return codigo,cantidad,iva,valor_producto,valor_final
N=int(input())
total_ventas=0
total_iva=0
codigo=[]
cantidad=[]
tipo=[]
valor_producto=[]
iva=[]
valor_final=[]
articulos={1:"Lapiz",2:"Cuaderno",3:"Borrador",4:"Regla",5:"ColoresX12",6:"Escuadra",7:"Calculadora",8:"CrayonesX6"}
precios={1:2500,2:4500,3:1500,4:5000,5:24000,6:4700,7:45000,8:8900}
for i in range(N):
    codigo.append(int(input()))
    cantidad.append(float(input()))
    tipo.append(int(input()))
for i in range(N):
    valor_producto.append(cantidad[i]*precios.get(codigo[i]))
    if tipo[i]==1:
        iva.append(0)
    elif tipo[i]==2:
        iva.append(valor_producto[i]*0.05)
    else:
        iva.append(valor_producto[i]*0.19)
    valor_final.append(valor_producto[i]+iva[i])
    total_iva+=iva[i]
    total_ventas+=valor_final[i]
codigo,cantidad,iva,valor_producto,valor_final=ordenamiento_burbuja(N,codigo,cantidad,iva,valor_producto,valor_final)
for i in range(N):
    print(codigo[i])
    print(articulos.get(codigo[i]))
    print(valor_producto[i])
    print(valor_final[i])
print(total_ventas)
print(total_iva)
