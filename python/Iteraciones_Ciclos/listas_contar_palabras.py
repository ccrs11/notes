# Programa para contar palabras de cada elemento de una lista de nombres
# Autor: Sergio Medina
# Fecha: 17/05/2022

#Programa principal
lista_nombres=[]
lista_cantidad=[]
nombre=input("Nombre completo de persona: ")
while nombre!="FIN":
    lista_nombres.append(nombre)
    nombre=input("Nombre completo de persona: ")
for x in lista_nombres:
    cantidad_palabras=len(x.split())
    lista_cantidad.append(cantidad_palabras)
for j in range(len(lista_nombres)):
    print("Nombre: ",lista_nombres[j]," Cantidad palabras: ",lista_cantidad[j])

               
    
    
    
