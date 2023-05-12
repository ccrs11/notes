class CuantaCoriente{
    constructor(number,name,coins=0){
        this.Number=number;
        this.Name=name;
        this.Coins=coins;
    }

    set number(number){
        this.Number=number;
    }
    set name(name){
        console.log("entraNameSet");
        this.Name=name;
    }
    set coins(coins){
        this.Coins=coins;
    }
    get number(){
        return this.Number;
    }
    get name(){
        console.log("entraNameget");
        return this.Name;
    }
    get coins(){
        return this.Coins;
    }
    
    consulCoins(){
        console.log(this.Coins);
    }
    depositar(money){
        this.Coins+=money;
    }
    girar(money){
        if(this.Coins>=money){
        this.Coins-=money
        }else{
            return false
        }
    }
}

const cuentaA= new CuantaCoriente(123456,"camilo",350000);
const cuentaB= new CuantaCoriente(123654,"llama",960000);

console.log(cuentaA.coins);
console.log(cuentaB.consulCoins());
console.log(cuentaA.girar(800000));
cuentaA.name="Oscar";
console.log("nombre: ",cuentaA.name);