# Validar Rango de valores
while True:
    try:
        estrato=int(input("Estrato (1,2,3,4,5,6): "))
        if estrato<1 or estrato>6:
            print("El estrato debe ser 1,2,3,4,5 o 6")
            continue
        break
    except ValueError:
        print("El estrato debe ser un dato numérico")
        
print(estrato)
