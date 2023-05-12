class Cuenta {
    static cantidad = 0;
    constructor(numero,saldo=0) {
        this._numero = numero;
        this._saldo = saldo;
        ++Cuenta.cantidad
    }
    set numero(nuevoNumero){
        this._numero = nuevoNumero;
    }
    get numero(){
        return this._numero;
    }
    set saldo(nuevoSaldo){
        this._saldo = nuevoSaldo;
    }
    get saldo(){
        console.log("GET saldo");
        return this._saldo;
    }
    depositar(monto){
        this._saldo += monto;
    }
    girar(monto){
       if (this._saldo>=monto) this.saldo -= monto;
       else return false;
    }
    consultarSaldo (){
        return this.saldo;
    }
 
    static nombrebanco (){
        return "Campus bank";
    }
}

//heredar
class CuentaAhorro extends Cuenta {

}
class CuentaCorriente extends Cuenta {
    static cantidad = 0;
    constructor (numero,saldo=0,topeCredito){
        super(numero, saldo);
        this._topeCredito = topeCredito;
        if (this._topeCredito === undefined ){
            this._topeCredito = 0;
        }
        ++CuentaCorriente.cantidad;
    }
    get topeCredito(){
        return this._topeCredito;
    }
    
    set topeCredito(nuevoTope){
        this._topeCredito = nuevoTope;
    }
    // METODO DE LA CLASE

  
    girar(monto){
        let tsaldo = this._saldo;
        tsaldo-=monto

        if (tsaldo >= - this._topeCredito){
            this._saldo = tsaldo;
            return true;
        }
         return false;
    }

}
//class Persona que es un atributo de la class padre Cuenta.
class Persona{
    static cantidadPersonas =0;
constructor(tipoPersona,tipoIdenti,numIdenti,nombre,telefono,Cuenta){
        this._tipoPersona = tipoPersona;
        this._tipoIdenti = tipoIdenti;
        this._numIdenti = numIdenti;
        this._nombre =nombre;
        this._telefono = telefono;
        this._Cuenta = Cuenta;
    
    
}
set tipoPersona(nuevoTipo){
    this._tipoPersona=nuevoTipo;
}
get tipoPersona(){
    return this._tipoPersona;
}
set tipoIdenti(nuevoTipoIdenti){
    this._tipoIdenti = nuevoTipoIdenti;
}
get tipoIdenti(){
    return this._tipoIdenti;
}
set numIdenti(nuevoNumIdenti){
    this._numIdenti = nuevoNumIdenti;
}
get numIdenti(){
    return this._numIdenti;
}
set nombre(nuevoNombre){
    this._nombre = nuevoNombre;
}
get nombre(){
    return this._nombre;
}
set telefono(nuevoTelefono){
    this._telefono = nuevoTelefono;
}
get telefono(){
    return this._telefono;
}
set Cuenta(nuevaCuenta){
    this._Cuenta = nuevaCuenta;
}
get Cuenta(){
    return this._Cuenta;
}
}
//clase PersonaNatural hereda de la class Persona
class PersonaNatural extends Persona{
    
    static cantidadPersonas = 0;
    constructor(sexo){
        super(numero,saldo,Persona);
        this._sexo=sexo;
        ++PersonaNatural.cantidadPersonas;
    }
    set sexo(nuevoSexo){
        this._sexo = nuevoSexo;
    }
    get sexo(){
        return this._sexo;
    }
    
}
//clase PersonaJuridica hereda de la class Persona
 class PersonaJuridica extends Persona{
    static cantidadPersonas=0;
    constructor(){
        super(numero,saldo,Persona);
        ++PersonaJuridica.cantidadPersonas;
    }
 }



// const cuenta1 = new CuentaCorriente(12345, 1000, new Persona("natural", "cedula", "123456789", "Juan Pérez", "3116343212",this.cuenta1));
// console.log(cuenta1);
const cuenta1 = new CuentaCorriente(753,2_000_000,2_000_000);
const p1= new Persona("Natural","CC",123,"Daniela",123456,cuenta1);
p1.Cuenta.girar(2_500_000);
p1.Cuenta.depositar(500_000);
p1.Cuenta.girar(7_000_000);
console.log(p1.Cuenta.consultarSaldo());