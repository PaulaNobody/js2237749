function principal(vec1, callback1, callback2) {
    let tam = Math.round(Math.random() * 20);
    for (let i = 0; i < tam; i++) {
      vec1.push(Math.round(Math.random() * 100));
    }
    callback1(vec1);
    console.log(callback2(vec1));
  }
  function imprimeVec(vec) {
    console.log(vec);
  }
  function sumaVector(vec) {  
    let suma=0;
    for (let i = 0; i < vec.length; i++) {
        suma+=vec[i];
    }
    return suma;
  }
  
  vector = [];
  principal(vector, imprimeVec, sumaVector);
  
  //console.log(Math.round(Math.random() * 20));
  //Misión: Intentar finalizar este programa
function principal(vec1, callback1,callback2) {
    let tam = Math.round(Math.random() * 20);
    for (let i = 0; i < tam; i++) {
      vec1.push(Math.round(Math.random() * 100));
    }
    callback1(vec1,callback2);
    //console.log(callback2(vec1));
  }
  function imprimeVec(vec, callback) {
    console.log(vec);
    callback(vec);
  }
  function sumaVector(vec) {  
    let suma=0;
    for (let i = 0; i < vec.length; i++) {
        suma+=vec[i];
    }
    return suma;
  }
  
  vector = [];
  principal(vector,()=>{imprimeVec(vector,()=>{
      console.log(sumaVector(vector));
    })
});