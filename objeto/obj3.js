class Carro{
    constructor(marca,modelo){
        this._marca=marca;
        this._modelo=modelo;

    }
    set marca(marca){
        this._marca=marca
    }
    set modelo(modelo){
        this._marca=modelo
    }
    get marca(){ 
        return this._marca
    } 
    get modelo(){ 
        return this._modelo
    }
    infocarro(){ 
        return`Automovil ${this._marca}  modelo ${this._modelo}`
    }
} 
var a=new Carro();
var b=new Carro("Chevrolet","Spark");
a.marca="dodge";
a.modelo="journey";
console.log(a)
console.log(b)
console.log(b.infocarro(b))
console.log(a.infocarro(a))

// Ejercicio modelar biblioteca

class Biblioteca{
    constructor(categoria,titulo,autor,fecha,cantpg) {
        this._categoria=categoria;
        this._titulo=titulo;
        this._autor=autor;
        this._fecha=fecha;
        this._cantpg=cantpg;
    }
    set categoria(categoria){
         this._categoria=categoria;
    }
    set titulo(titulo){
        this._titulo=titulo;
   }
   set autor(autor){
    this._autor=autor;
    }
    set fecha(fecha){
        this._fecha=fecha;
   }
   set cantpg(cantpg){
    this._cantpg=cantpg;
}
   get categoria(){
       return this._categoria
   }
   get titulo(){
    return this._titulo
}
get autor(){
       return this._autor
   }
   get fecha(){
    return this._fecha
}
get cantpg(){
    return this._cantpg
}
   infobli(){
       return ` Categoria : ${this._categoria}Titulo : ${this._titulo} , Autor : ${this._autor}, Fecha de impresion ${this._fecha} , N° de páginas ${this._cantpg}  `
   }
   promedio(tiempo){
       this.tiempo=tiempo;
      var x=  (((this._cantpg*tiempo)/60)/60);
      return `EL tiempo que le tomara leer este libro es : ${x}  horas`
   }
   caducidad(fecha){
       this.fecha=fecha;
       fecha1=new Date('May 03 2012')
       if(this._fecha!=fecha1){
           if (this._fecha<fecha1) {
               return `Este libro se debe reemplazar`
           }else  if (this._fecha>fecha1)
           {
            var x= (fecha - this._fecha1)  
            return `faltan ${x} años para reemplazar este libro`
           }        
       }
   }
   
}
var d=new Biblioteca();
// var c=new Biblioteca("Fantacia","Danza de Fuego e Hielo","Martin R.R ");
// console.log(d)
// console.log(c)
// d.titulo="Las ventajas de ser invisible";
// d.categoria="Juvenil";
// d.autor="Nicolas Spark";
d.fecha="01 May 2011";
d.cantpg="300"
console.log(d.promedio(d.cantpg,30))
console.log(d.caducidad(d.fecha,new Date('May 03 2011') ))
// console.log(c.infobli(c))
// console.log(d.infobli(d))

