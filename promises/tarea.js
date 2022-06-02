let usuarios=[{
    id:1,
    nombre: 'Catalina',
    edad:'25',
    profesion: 'Administradora',
    direccion:'Bogota'
},
{
    id:2,
    nombre: 'Quenguan',
    edad:'24',
    profesion: 'Estudiante',
    direccion:'Bogota'
}];

const obtenerUsuario = id =>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario=>usuario.id === id)){
            resolve (obtenerUsuario)
            // console.log('el usuario existe');
            // resolve(obtenerTelefono(id));
        }else{
            reject('el usuario no existe')
        }
    });
};


async function obtenerNombre (){
    if(usuarios.find(usuarios=>usuarios.nombre === nombre)){
        resolve ('La direccion existe') //-< inyectar en el resolve una nueva promesa
        
    }else{
        reject('La dirección no existe no existe')
    }
    await obtenerUsuario();
    console.log(`sabemos donde vive? R: vive en ${nombre}`)
}
