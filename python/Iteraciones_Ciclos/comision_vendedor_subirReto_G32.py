lista_nombre=[]
lista_tipo=[]
lista_ventas=[]
lista_comision=[]
N=int(input())
total_comision=0
for i in range(N):
    nombre=input()
    tipo=int(input())
    ventas=float(input())
    lista_nombre.append(nombre)
    lista_tipo.append(tipo)
    lista_ventas.append(ventas)
print(len(lista_nombre))
print(len(lista_tipo))
print(len(lista_ventas))
for x in range(N):
    if lista_tipo[x]==1:
        comision=lista_ventas[x]*0.20
    elif lista_tipo[x]==2:
        comision=lista_ventas[x]*0.15
    else:
        comision=lista_ventas[x]*0.25
    lista_comision.append(comision)
    total_comision+=comision
    print(comision)
print(total_comision)

    
    
