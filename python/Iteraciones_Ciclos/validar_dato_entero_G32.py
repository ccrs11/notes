# Validación entrada de un dato numérico entero

while True:
    try:
        N=int(input("cantidad de usuarios: "))
        break
    except ValueError:
        print("La cantidad de usuarios deber ser un dato entero")

print(N)
