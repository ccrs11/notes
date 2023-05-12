# Programa ordenamiento burbuja de varias listas (Ascendente) (N elementos)
# Autor: Sergio Medina
# Fecha: 17/06/2022

#Función ordenamiento
def ordenamiento_burbuja(lista_productos,lista_precios):
    for i in range(N-1):
        for j in range(i+1,N):
            if lista_productos[i]>lista_productos[j]:
                temp=lista_productos[i]
                lista_productos[i]=lista_productos[j]
                lista_productos[j]=temp            
                temp1=lista_precios[i]
                lista_precios[i]=lista_precios[j]
                lista_precios[j]=temp1
    return lista_productos,lista_precios
#Programa principal
lista_productos=[]
lista_precios=[]
N=int(input("Cantidad de productos: "))
for i in range(N):
    producto=input("Producto: ")
    precio=float(input("Precio: "))
    lista_productos.append(producto)
    lista_precios.append(precio)
#Imprimir listas
print("Listas originales")
for i in range (N):
    print("Producto: ",lista_productos[i])
    print("Precio: ",lista_precios[i])
lista_productos,lista_precios=ordenamiento_burbuja(lista_productos,lista_precios)
#Imprimir listas
print("Listas ordenadas")
for i in range (N):
    print("Producto: ",lista_productos[i])
    print("Precio: ",lista_precios[i])
    
          
