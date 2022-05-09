
// porcentaje flecha 
var p= cantidad=>cantidad*0.50;
console.log(p(120000 ));


// numero que nos muestre por cuaes es divisible
var d= function (num) {
    var values=[];
    for (let i=1; i<=num; i++) {
        if (num%i==0) {
            values.push(i);
        }
    }
    return values.sort((a,b)=>a-b);


}
console.log(d(10))

//2. funcion que reciba un numero y de el indicar cuales son los divisores
var n = numero=>{
    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero%divisor==0) {
            console.log(`${divisor} es divisor de ${numero}`);
        }
    }
}
console.log(n(10));


// fecha  que al momento de poner la informacion nos diga si es antes actual o despues 

var f= function(fecha1,fecha2){
    if (fecha1<fecha2) {
        return  `la fecha ${fecha2} es posterior a la fecha actual ${fecha1}`;
    }else if(fecha1.getTime()=== fecha2.getTime()){
        return'es la misma fecha'
        // return '1'
    }
    else{
        // 
        return `La fecha  es ${fecha2} es anterior a la fecha actual ${fecha1}`
        // return '2'
    }
 
    
}
// console.log(f(new Date(),new Date('May 03 2022'))); // es posterior a la actual
console.log(f(new Date(),new Date())); // es la misma 
// console.log(f(new Date(),new Date('Apr 02 2022'))); // es anterior a la actual
// 
//  numeros divisibles 

//  mod


// a)Leer una cadena de texto y decir cuantas minusculas, mayusculas y cadeenas tiene.

var t= function (){


}
// document.write(t.toLowerCase())
console.log(t(LowerCase.length()))
