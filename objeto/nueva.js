class Recurso{//super clase o clase padre
    constructor(nombre,categoria){
        this._nombre=nombre;
        this._categoria=categoria;
    }    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
       this._nombre=nombre;     
    }
    get categoria(){
        return this._nombre;
    }
    set categoria(categoria){
       this._categoria=categoria;     
    }   
}
//var rr=new Recurso("aa","bb","cc",123);
//console.log(typeof(rr));
class Libro extends Recurso{//sub clase o clase hija
    constructor(nombre,categoria,paginas,editor){
        super(nombre,categoria);
        this._paginas=paginas;
        this._editor=editor;                   
        
    }    

}
var lib1=new Libro("la odisea","epico",250,"oveja negra");
var lib2=new Libro("la iliada","epico",500,"oveja negra");
function alcancia(){
    let ahorro=0;
    function guardar(monedas){
        ahorro=ahorro+monedas;
        console.log(`tiene $ ${ahorro} pesos`)
    }
    return guardar;
}
const pedro=alcancia();
const maria=alcancia();
pedro(100);
maria(1);
pedro(200);
maria(5);