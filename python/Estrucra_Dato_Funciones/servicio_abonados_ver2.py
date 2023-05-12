#Programa para calcular factura de abonados con modularidad(Funciones)
#Autor: Sergio Medina
#Fecha: 05/06/2021
#Funciones (Módulos)
def factura_abonado(est,imp):
    if est==1:
        tb=10000
    elif est==2:
        tb=15000
    elif est==3:
        tb=20000
    elif est==4:
        tb=25000
    else:
        tb=30000
    vimp=imp*100
    va=tb+vimp
    return va
def valida_entero(mensaje):   
    while True:
          try:
              dato = int(input(mensaje))
              
              break
          except ValueError:
                   print("Error!  Debe ser entero  Intenta de nuevo...")
    return dato
def valida_estrato(): 
    while True:
          try:
              est = int(input("Ingrese Estrato(1,2, 3, 4 o 5) : "))
              if est<1 or est>5:
                    print("Error!  Estrato es 1,2,3.4 o 5  Intenta de nuevo...")
                    continue
              break
          except ValueError:
                   print("Error!  Debe ser entero  Intenta de nuevo...")
    return est
#Programa principal
N=valida_entero("Cantidad de abonados: ")
vta=0
for i in range(N):
    nom=input("Nombre: ")
    est=valida_estrato()
    imp=valida_entero("Cantidad de impulsos: ")
    #LLamado a la función
    va=factura_abonado(est,imp)
    vta=vta+va
    print("Valor factura abonado: ",'{:,.2f}'.format(va))
print("Valor total abonados: ",'{:,.2f}'.format(vta))

    
    
    

    
    
