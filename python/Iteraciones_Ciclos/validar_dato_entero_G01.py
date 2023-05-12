#Programa validar datos enteros
while True:
    try:
        N=int(input("Cantidad de Usuarios: "))
        break
    except ValueError:
        print("La cantidad de usuarios debe ser un dato entero")

print(N)
