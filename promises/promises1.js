// ejemplos de promises
// funcion asincrona: no sigue la secuencia del codigo se ejecuta aparte de la proceso principal 

let x=10;
const p = new Promise(function(resolve,reject){
    if(x==11){
        resolve('La variable es igual a 10');
    }else{
        reject('La variable no es igual a 10')
    }
});
p
.then(res=>{
    console.log('success:'+ res) 
})
.catch(error=>{
    console.log('error:' +error);
});

// ejemplo 2


const prome = new Promise((resolve)=>{
    let s=2;
    setTimeout(()=>{
        s=s*5+10;
        console.log('2. proceso terminado...');
        resolve(s);
    },2000);
});
console.log('1. proceso iniciado:');

prome.then(res =>{
    console.log('3. el resultado es: '+res);
});

// ejemplo 3: añadirle una promesa a una funcion
// 1 se tienen  2 objetos que a su vez son arreglos 
let usuarios=[{
    id:1,
    nombre: 'Catalina'
},
{
    id:2,
    nombre: 'Quenguan'
}];

let telefonos =[{
    id: 1,
    telefono: 3125050202
},{
    id: 2,
    telefono: 3209899900
}];
// funcion que ayuda a obtener el usuario, se le añade una promesa
const obtenerUsuario = id =>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario=>usuario.id === id)){
            // resolve ('El usuario existe')
            console.log('el usuario existe');
            resolve(obtenerTelefono(id));
        }else{
            reject('el usuario no existe')
        }
    });

};

const obtenerTelefono = id=>{
    return new Promise((resolve,reject)=>{
        if(telefonos.find(telefono=>telefono.id === id)){
            resolve ('El telefono  existe') //-< inyectar en el resolve una nueva promesa
            
        }else{
            reject('el telefono no existe no existe')
        }
    });
};
// llamar las funciones
obtenerUsuario(1)
.then(res=>{
    // console.log(res)
    return res;
})
.then(mensaje =>{
    console.log(mensaje);
})
.catch(error=> {
    console.log(error);
});
