class Empresa{
    #id
    #name
    constructor(id,name){
        this.#id=id;
        this.#name=name;
    }
    //setters and getters
    set id (id){
        this.#id=id;
    }
    get id (){
        return this.#id;
    }
    set name (name){
        this.#name=name;
    }
    get name (){
        return this.#name;
    }
}
class Empleado extends Empresa{
    #age;
    #salary;
    #experiencia;
    constructor(id,name,age,salary,experiencia){
        super(id,name);
        this.#age=age;
        this.#salary=salary;
        this.#experiencia=experiencia;
    }
    set age (age){
        this.#age=age;
    }
    get age (){
        return this.#age;
    }
    set salary (salary){
        this.#salary=salary;
    }
    get salary (){
        return this.#salary;
    }
    set experiencia (experiencia){
        this.#experiencia=experiencia;
    }
    get experiencia (){
        return this.#experiencia;
    }

    //Metodos

    incremento(){
        if(this.#experiencia>1){
            this.#salary=this.#salary+100_000;
            return true; 
        }return false;
    }
}

class Cliente extends Empresa{
    #age
    #history
    #phone
    #email
    constructor(id,name,age,phone,email,history){
        super(id,name);
        this.#age=age;
        this.#phone=phone;
        this.#email=email;
        this.#history=history;
    }
    set age (age){
        this.#age=age;
    }
    get age (){
        return this.#age;
    }
    set phone (phone){
        this.#phone=phone;
    }
    get phone (){
        return this.#phone;
    }
    set email (email){
        this.#email=email;
    }
    get email (){
        return this.#email;
    }
    set history (history){
        this.#history=history;
    }
    get history (){
        return this.#history;
    }

    //methods
    santion(){
        return this.#history=false;
    }
}

class Experiencia{
    #description
    #time
    constructor(description,time){
        this.#description=description;
        this.#time=time;
    }

    set description (description){
        this.#description=description;
    }
    get description (){
        return this.#description;
    }
    set time(time){
        this.#time=time;
    }
    get time(){
        return this.#time;
    }
}

class Historial{
    #description;
    #valorVendido;
    constructor(description,valorVendido){
        this.#description=description;
        this.#valorVendido=valorVendido;
    }

    set description (description){
        this.#description=description;
    }
    get description (){
        return this.#description;
    }
    set valorVendido(valorVendido){
        this.#valorVendido=valorVendido;
    }
    get valorVendido(){
        return this.#valorVendido;
    }
}


const experiencia1=new Experiencia("hihihhi",1);
const empleado1=new Empleado("idsss","names","adge",5_000_000,experiencia1);
for(let element of empleado1.age){
    console.log(element);
}

