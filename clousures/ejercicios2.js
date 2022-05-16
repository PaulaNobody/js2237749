// Saludo {prefijo}+{nombre}+ eres el num{num}

const men=(num)=>{ 
    return (name)=>{
        let n=name
        num ++;
        console.log (`bienvenido ,${n} eres el num ${num}`);
    }    
  }
//   const men1= men(10);
//   men1("juan")

  const Men = function(num){
    // let i= num;
    return function(name){
        let n=name;
        num ++;
        console.log (`bienvenido ,${n} eres el num ${num}`);

    }
  }
//   const Men1= Men(10);
//   Men1("juan")
//   Men1("estella")
//   Men1("Luna")
// ejercicio2

 const ext=function(array){
     let contador=0;
     let p=0;
     array=[1,2,2,2];
     return function(num){
         let length=array.length;
         for(i=0;i<length;i++){
            p=array.indexOf(num)
            if(num==array[i]){
                contador ++;
            }
         }
         console.log(`El numero es: ${num}, tiene ${contador} repeticiones y se encuentra en la posicion ${p}`);
     }
 }
//  const N=ext();
//  N(2)
// manera diferente de obtener la suma de un arreglo
const arr = [1, 2, 3, 4];
const reducer = (accumulator, curr) => accumulator + curr;
// console.log(arr.reduce(reducer));


// ejercicio 3:Recibe un arreglo y retorna suma y promedio{un closure con dos funciones en el retorno}
 const OB= function(arreglo){
      arreglo=[1, 2, 3, 4];
      let length= arreglo.length;
  return{
      suma: function(){
          let sum=0;
          for(i=0;i<length;i++){
              sum+=arreglo[i];
          }
        return `El valor de la suma de [${arreglo} ] es : ${sum}`
      },
      prom: function(){
          let sum=0;
          let p=0;
          for(i=0;i<length;i++){
            sum+=arreglo[i];
            p=sum/length;
        }
        return `El promedio de el arreglo [ ${arreglo} ] es: ${p}`
      }
  }
}
  const x=OB();
//  console.log(x.suma())
//  console.log(x.prom())

// ejercicio 4. Recibe un objeto literal y dice cuantos elementos clave valor tiene
//Funcion externa
function ext(){
    const obj = {//Objeto literal
        nombre:"Paula",
        apellido:"Arevalo",
        telefono:3004541151};
        //Funcion interna que hace uso del ciclo for in e imprime en pantalla
    function int(){
        for (i in obj) {
            console.log(`${i}: ${obj[i]}`);
        }
    }
    return int;//Retorno de la funcion interna
}
// const c=ext();//Funcion externa almacenada en variable constante
// c();//Llamado de la funcion


