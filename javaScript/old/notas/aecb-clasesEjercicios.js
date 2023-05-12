/* class CuantaCoriente{
    constructor(number,name,coins){
        this.number=number;
        this.name=name;
        this.coins=coins;
    }
    consulSaldo(){
        console.log(coins)
    }
    depositar(money){
        coins+=money;
    }
    girar(money){
        if(coins>=money){
        coins-=money
        }else{
            return false
        }
    }
}

const cuentaA= new CuantaCoriente(123456,camilo,350_000);
const cuentaB= new CuantaCoriente(123654,llama,960_000);

console.log(cuentaA.depositar(200_000));
console.log(cuentaB.consulSaldo(540_000));
console.log(cuentaA.girar(800_000));
 */

class CalcularCosas {
    constructor(number) {
        this.number = number;
    }
    calcularPar() {
        if (number % 2 === 0) {
            estado = " es par"
        } else {
            estado = " es par"
        }
        return estado;
    }

    esPosOrNot() {
        if (number > 0) {
            estado2 = "es positivo"
        } else if (number < 0) {
            estado2 = "es negativo"
        } else {
            estado2 = "es cero"
        }
        return estado2;
    }

    isPrime() {
        if (number < 2) {
            return false;
        }

        if (number === 2) {
            return true;
        }

        if (number % 2 === 0) {
            return false;
        }

        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

const numero1= new CalcularCosas(233);
const numero2= new CalcularCosas(56);

console.log(numero1.esPosOrNot());
console.log(numero1.calcularPar());
console.log(numero2.isPrime());

