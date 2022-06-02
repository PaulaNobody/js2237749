greetings = '';

function hello() { 
  return new Promise((resolve, reject) =>{    
      setTimeout(()=>{greetings = 'Buenos Días';
                      resolve();} , 1000 );
  });
} 

async function synchronize(){
    console.log ('1- Empieza'); 
    await hello();
    console.log ('2-', greetings);
    console.log ('3- Acaba');
}

// synchronize();


function aguaHervida(control){
    return new Promise((resolve,reject)=>{            
        if (control) {
            setTimeout(() => {
                console.log(`Proceso de hervimiento de agua terminado`)        
                    resolve()
                },3000)        
        } else {
            reject(error);            
        }
        
    })   
}
function agregarIngredientes(){
    console.log(`Todos los ingredientes listos`)    
}
function picarCarne(){
    console.log('Lista la carne')
}
function pelarPapa(){
    console.log('Lista la papa')
}
 function lavarVerduras(){
    console.log('Listas las verduras')
}
 aguaHervida(true)
 .then(agregarIngredientes)
 .catch(()=>console.log('No hay GAS'))
 pelarPapa()
 lavarVerduras()
 picarCarne()

 var obj = {
    crack:"brayan",
    suma:function () {
        let s=1+1;
        return s;
    }
};

function prueba(obj) {
    return new Promise(
        function (resolve, reject) {
            if (!obj) {
                reject(new Error(`No existen datos`));
            }
            setTimeout(() => {
                resolve (obj);
            }, 500);
        }
    );
}
let x = {}
prueba().then(function (obj) {
    console.log(`
    ${obj.suma()}
    ${obj.crack}
    `);
})
.then((x)=>console.log(typeof(x)))