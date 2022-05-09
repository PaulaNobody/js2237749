var ob={
    nombre:"Daniel",
    documento:"10214",
    ficha: "2124562",
    datos:function(){
        return `soy ${this.nombre}, me identifico con el numero de cc ${this.documento} pertenezco a la ficha ${this.ficha} mi telefono es ${this.telefono}`}
    } 

// nueva función Aritmetica básica

    function aritmetica(num1,num2){
        this.num1=num1;
        this.num2=num2;
        this.suma=function() { return `la suma de ${num1} + ${num2} es:  ${num1+num2}  `
        }
        console.log()
        this.resta=function(){ return `la resta de ${num1} - ${num2} es:  ${num1-num2}`};
        this.multi=function(){ return `la multiplicación de ${num1} X ${num2} es:  ${num1*num2}`};
        this.div=function(){ return `la division de ${num1} % ${num2} es ${num1/2}`}
    }
    var obj1= new aritmetica (5,10);
    console.log(obj1.suma())
    console.log(obj1.resta())
    console.log(obj1.multi())
    console.log(obj1.div())

// funciones de fraccionarios 
function fraccion(num1,den1,num2,den2){
    this.num1=num1;
    this.num2=num2;
    this.den1=den1;
    this.den2=den2;
    this.suma=function(){
        if(den1!=den2){
            sumad=( ((num1*den2)+(num2*den1))/(den1*den2)); 
            return `fraccionario suma: (${num1}/${den1})  +  (${num2}/${den2}) = ${num1*den2} +  ${num2*den1} /${den1*den2}  =  ${sumad}`
        }else    {    sumai= (num1+num2)/den1;
            return `fraccionario suma: ${num1+num2} / ${den1} = ${sumai}`;   
        } 
    }
    this.resta=function (){
        if(den1!=den2){
            restad=( ((num1*den2)-(num2*den1))/(den1*den2)); 
            return `fraccionario resta: (${num1}/${den1})  -  (${num2}/${den2}) = ${num1*den2} -  ${num2*den1} /${den1*den2}  =  ${restad}`
        }else    {    restai= (num1-num2)/den1;
            return `fraccionario resta:${num1-num2} / ${den1} = ${restai}`;   
        } 
    }
    this.multi=function(){
        multip=((num1*num2)||(den1*den2));
        return ` multiplicación de; ${num1}/${den1} X ${num2}/${den2}  = ${multip} `
    }
    this.div=function(){
        a=(num1*den2)
        b=(num2*den1)
        divi= a/b
        return ` División de ${num1}/${den1} % ${num2}/${den2} = ${divi}`
    }

}

var obj3=new fraccion ( 4,2,1,2)
console.log(obj3.suma())
console.log(obj3.resta())
console.log(obj3.multi())
console.log(obj3.div())



// nueva funcion lectura de mayus, minus, num y caracteres

function Cadena(texto){
    this.texto=texto;
    this.mayuscula=function(){
        var contar = 0;
        var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       
       for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < texto.length; x++) {
        if(texto[x]==mayusculas[i]){
        contar+=1;
            }
          }
          
        return ("Se encontraron: "+contar+" Mayusculas");
        }
    }
     this.minus=function(){
            var contar = 0;
            var minusculas = "abcdefghijklmnopqrestuvwxyz";
           for (var i = 0; i < minusculas.length; i++) {
            for (var x = 0; x < texto.length; x++) {
            if(texto[x]== minusculas[i]){
            contar+=1;
                }
              }
            }
            return ("Se encontraron: "+contar+" minusculas");
    }
    this.numeros=function(){
        var contar = 0;
            var numeros="0123456789";
            for (var i = 0; i < numeros.length; i++) {
                for (var x = 0; x < texto.length; x++) {
                if(texto[x]== numeros[i]){
                contar+=1;
                    }
                  }
                } 
        return ("Se encontraron: "+contar+" números");
        }
        
    this.caracteres=function(){
            var contar = 0;
        var caracteres=".,:;{}+!#$%&/()=?¡¿'¨*[]_:;><";
        for (var i = 0; i < caracteres.length; i++) {
        for (var x = 0; x < texto.length; x++) {
            if(texto[x]== caracteres[i]){
            contar+=1;
                }
              }
            } 
               return ("Se encontraron: "+contar+" caracteres");
            }
    
}
    var obj=new Cadena ("HOLAAAAAAkhgjhjgkjhdkj123456789 *[...");
    console.log(obj.mayuscula());
    console.log(obj.minus());
    console.log(obj.numeros());
    console.log(obj.caracteres());    

// funcion arreglos
function Arreglos (arr){
    this.arr=arr;
    this.suma=function(){
        var sum =0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return `La suma de los número del arreglo es ${sum}`;
    }
    this.promedio=function(){
        var sum =0;
        var pro =arr.length;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return `El promedio de los número del arreglo es ${sum/pro}`
    }
    this.mayor=function(){
        var mayor=Math.max(...arr);
        return `El número mayor de los número del arreglo es ${mayor}`
    }
    this.menor=function(){
        var menor=Math.min(...arr);
        return `El número menor de los número del arreglo es ${menor}`
    }
}

var obj=new Arreglos ([4, 1, 7, 8, 5, 3, 2, 4]);
console.log(obj.suma());
console.log(obj.promedio());
console.log(obj.mayor());
console.log(obj.menor());