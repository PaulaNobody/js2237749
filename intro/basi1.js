// var x=100
// console.log(`x vale ${x}`);

// var  nombres  =  [ 'María' , 'José' , 'Juan' , 'Ana' , 'Pedro' ] ;
// nombres.forEach ( nombres  => {
//      console.log ( "Hola    "  +  nombres  ) ;
//     // devuelve `Hola ${nombres}
//     // `;

// } ) ;

// ejercicio funcion factores


// correcion parametro
function factor(n,m){
    if(n%m==0||m%n==0){
        return ("uno es factor del otro")
    }else{
        ('uno no es factor del otro')
    }
}console.log(factor(5,10));
// sin parametro
var sinpar=()=> "hola";
console.log(sinpar());

// con parametro
var cuadrado=function(num){
    return num*num;
}

// var cuadradito= num=> num*num;
// console.log(cuadradito(10));
// // condicional temario 
// var f=(n,m)=>n%m==0t cdct 