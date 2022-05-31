// function jugar(j1,j2mtriqui,cb1){
//     mtriqui=[[x,O,X],
//     [],
//     []];
//  mtriqui[0]=tam;
//  let tam=2;
//  if(mtriqui.length<tam){
//      for(index=0;index<mtriqui.length;index ++){
//          console.log(mtriqui[index])
//      }
//  }
//  cb1
// }
// function imprimir(mtriqui){
//     console.log( `fin ${mtriqui}`)
// }

// jugar(mtriqui,imprimir)



//Ejercicio 2 (triqui)
function letras(j1, j2,inicio) {
    setTimeout(() => {
        let letra=j1;
    let letra2=j2;
    let fila=[letra2,letra]
    const tam=1
    i=3
    for (let i = 0; i < tam; i++) {
        fila.push(letra,letra2);
        // fila.slice(0,-1)
        console.log(`| ${fila [0]} | ${fila [1]} | ${fila [2]} |`)
      }  
    }, 2000);
    inicio();
    triqui("O","X","O")
    triqui("X","O","X")
    final()
 
  }
  function triqui(letra, letra2,) {
    setTimeout(() => {
    let fila=[letra,letra2]
    const tam=1
    i=3
    for (let i = 0; i < tam; i++) {
        fila.push(letra,letra2);
        fila.slice(0,-1)
        console.log(`| ${fila [0]} | ${fila [1]} | ${fila [2]} |`)
        // console.log(fila)
      }  
    }, 3000);
 
 
  }

  function inicio() {//Funcion principal, setTimeout con funcion flecha como parametro y tiempo en milisegundos
    setTimeout(() => {
    console.log(`Que empieze el juego`);
    }, 1000);
  }
  function final(){//Funcion principal, setTimeout con funcion flecha como parametro y tiempo en milisegundos
        setTimeout(() => {
        console.log(`Fin del juego`);
        }, 4000);
    }
  letras("O", "X", inicio,final)

