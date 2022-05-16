// Ejercicio 1:
// Indicar los valores de los catetos del triangulo, con los que se debe de hallar el valor de la hipotenusa.

const Teorema=function (a,b,c){
     return function (){
         if(a===0){
             b1=b*b;
             c1=c*c;
             a1=b1+c1;
             h=Math.sqrt(a1);
            //  console.log(`el valor de a es :${a1}, el valor de b es: ${b1}, el valor de c es: ${c1}
            //  su hipotenusa es= ${h}`)   
         }else if(b==0){
            a1=a*a;
            c1=c*c;
            b1=a1-c1;
         h=Math.sqrt(b1);
        //  console.log(`el valor de a es :${a1}, el valor de b es: ${b1}, el valor de c es: ${c1}
        //  su hipotenusa es= ${h}`) 
         }else (c===0);
         {
            a1=a*a;
            b1=b*b;
            c1=a1-b1
            h=Math.sqrt(c1);
            // console.log(`el valor de a es :${a1}, el valor de b es: ${b1}, el valor de c es: ${c1}
            // su hipotenusa es= ${h}`)
         }    
               console.log(`el valor de a es :${a1}, el valor de b es: ${b1}, el valor de c es: ${c1}
            su hipotenusa es= ${h}`)
     }    
}
// const hipotenusa1=Teorema(6,4,0)
// const h2=Teorema(6,0,4)
// // const h3=Teorema(0,8,2)
// console.log(hipotenusa1())
// console.log(h2())

// Ejercicio 2:
// Ingresar el valor de un billete y el valor de un producto; si el producto cuesta más de $2000 se realizará el descuento de 10% si el producto cuesta más de $5000 se 
// realizará el descuento de 20% y si el producto cuesta más de $10000 el descuento será de 30%.


const descuento=function(billete,producto){
    return function (){
        if(producto>2000 & producto <5000){
            d="10%";
                desc=producto*0.10;
                valor=producto-desc
                vueltas=billete-valor;
        }
        else if(producto>5000 & producto <10000){
            d="20%";
            desc=producto*0.20;
            valor=producto-desc
            vueltas=billete-valor;
        }else 
        {
            d="30%";
            desc=producto*0.30;
            valor=producto-desc
            vueltas=billete-valor;
        }

        console.log  (`El valor del producto es ${producto},
        aplica un descuento de ${d} el valor de su descuento es de:${desc}
        usted paga con un billete de: ${billete}, 
        su cambio es de $ : ${vueltas}  `)
    }
    
}

const A= descuento (20000,2500)
const A3=descuento (20000,5500)
const A2=descuento (20000,10500)
// A()
// A2()
// A3()


//Ejercicios David 1. Cree un algoritmo , que solicite los tres lados de un triángulo Escribir 
// un algoritmo, que solicite los tres lados de un triángulo, como salida deberá mostrar si es isóceles,
//  escaleno o equilátero y el porque es ese tipo de triangulo

const tipo=function(a,b,c){
    return function(){
        if(a===b & b===c & c===a){
            t="Equilatero, porque todos sus lados son iguales"
        }else if(a==b & b!=c & c!=a){
            t="isósceles, porque dos de sus lados son iguales"
        }else 
        {
            t="Escaleno, porque ninguno  de sus lados son iguales"
        }
        console.log(` el lado a es: ${a},
         el lado b es: ${b},
          el lado c es: ${c}
          Por lo tanto es un triangulo ${t}`)  
    }
}
const T1=tipo(10,10,10)
const T2=tipo(10,10,5)
const T3=tipo(10,6,5)
T1()
T2()
T3()
// segundo ejercicio de david  el juego de juan y carlos
function jugadores(juan, carlos){
    let x=0;
    let y=0;
    let letrasj="zwrt"//abcd
    let letrasc="efgh"
    function placas(){
        let length1=letrasj.length
        let length2=juan.length
        for (let j =0; j < length1; j++){
            for (let lej = 0; lej < length2; lej++){
                if (letrasj[j]==juan[lej]){
                    x=x+1;
                }
            }
        }
        console.log(`Juan tiene ${x} puntos`);
        let length3=letrasc.length
        let length4=carlos.length
        for (let c =0; c < length3; c++){
            for (let lec = 0; lec < length4; lec++){
                if (letrasc[c]==carlos[lec]){
                    y=y+1;
                }
            }
        }
        console.log(`Carlos tiene ${y} puntos`);

        if(x>y){
            console.log(`Juan lleva la delantera`)
        } else if (y>x){
            console.log(`Carlos lleva la delantera`)
        } else {
            console.log(`Están empatados`)
        }
    }
    return placas;
}
const i=jugadores("abcz","efgh");
i();



