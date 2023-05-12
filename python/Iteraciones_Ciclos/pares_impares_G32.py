# Programa para calcular pares e impares - Ciclo WHILE
# Autor: Sergio Medina
# Fecha: 06/06/2022

numero_entero=int(input("Número entero: "))
cantidad_pares=0
cantidad_impares=0
while numero_entero!=-1:
    if numero_entero%2==0:
        print(numero_entero," es PAR")
        cantidad_pares=cantidad_pares+1
    else:
        print(numero_entero," es IMPAR")
        cantidad_impares=cantidad_impares+1
    numero_entero=int(input("Número entero: "))
print("Cantidad de pares: ",cantidad_pares)
print("Cantidad de impares: ",cantidad_impares)
    
        
        
    
    
