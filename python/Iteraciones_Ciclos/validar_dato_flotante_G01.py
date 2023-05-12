#Progarma validar datos flotantes
while True:
    try:
        consumo=float(input("Consumo del mes: "))
        break
    except ValueError:
        print("El consumo del mes es un dato flotante")

print(consumo)
