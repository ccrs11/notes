class Figura{
    #color
    constructor(color){
        this.#color=color;
    }

    set color(color){
        this.#color=color;
    }
    get color(){
        return this.#color=color;
    }

    calcularArea(){};
    calcularPerimetro(){};
}

class Cuadrado extends Figura {
    #lado
    constructor(color,lado){
        super(color);
        this.#lado=lado;
    }
    set lado(lado){
        this.#lado=lado;
    }
    get lado(){
        return this.#lado;
    }

    calcularArea(){
        return this.#lado*this.#lado;
    }
    calcularPerimetro(){
        return (4*this.#lado);

    }
}

class Perimetro extends Figura {
    #base
    #altura
    constructor(color,base,altura){
        super(color);
        this.#base=base;
        this.#altura=altura;
    }

    set base(base){
        this.#base=base;
    }
    get base(){
        return this.#base=base;
    }
    set altura(altura){
        this.#altura=altura;
    }
    get altura(){
        return this.#altura=altura;
    }

    calcularArea(){
        return this.#base*this.#altura;
    }
    calcularPerimetro(){
        return (2*this.#altura)+(2*this.#base);
    }
}

class Circulo extends Figura {
    #radio
    constructor(color,radio){
        super(color);
        this.#radio=radio;
    }

    set radio(radio){
        this.#radio=radio;
    }
    get radio(){
        return this.#radio=radio
    }

    calcularArea(){
        return Math.PI*this.#radio*this.#radio;
    }
    calcularPerimetro(){
        return Math.PI*this.#radio;
    }
}

class Canva{
    #background
    #alto
    #ancho
    #figuras
    constructor(){
        this.#background="white";
        this.#alto=800;
        this.#ancho=600;
        this.#figuras=[];
    }

    get figuras(){
        return this.#figuras;
    }

    agregarFigura(figura){
        this.#figuras.push(figura);
    }
}

let c1=new Canva();
// console.log("Figuras",c1.figuras);
let circulo1 = new Circulo("color",3);
let cuad1 = new Cuadrado("yellow",3);
let circle1 = new Circulo("verde",5)
c1.agregarFigura(cuad1);
c1.agregarFigura(circle1);
c1.agregarFigura(circulo1);

//Hacer un for para recorrer el arreglo e imprimir las propiedades que 
for(let element of c1.figuras){
    console.log(element);
}

console.log(c1.figuras);
console.log("Area cuadrado",c1.figuras[0].calcularArea());
