# Validación entrada de un dato numérico flotante

while True:
    try:
        consumo=float(input("Consumo: "))
        break
    except ValueError:
        print("El consumo debe ser un dato flotante")

print(consumo)
