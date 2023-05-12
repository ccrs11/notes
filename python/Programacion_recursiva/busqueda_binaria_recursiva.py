# Programa busqueda binaria recursivo
# Autor: Sergio Medina
# Fecha: 26/06/2022
def busqueda_binaria_recursiva(vector,elemento,izq,der):
    if izq>der:
        return -1
    med=(izq+der)//2
    if vector[med]==elemento:
        return med
    elif vector[med]>elemento:
        return busqueda_binaria_recursiva(vector,elemento,izq,med-1)
    else:
        return busqueda_binaria_recursiva(vector,elemento,med+1,der)
def valida_entero(etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            break
        except ValueError:
            print(etiqueta," debe ser dato ENTERO")
    return dato

vector=[1,2,3,4,5,6,7,8,9,10]
elemento=valida_entero("Ingrese elemento: ")
izq=0
der=len(vector)-1
if busqueda_binaria_recursiva(vector,elemento,izq,der)==-1:
    print("Elemento no encontrado en lista")
else:
    print ("Posición elemento: ",busqueda_binaria_recursiva(vector,elemento,izq,der))

        
        
