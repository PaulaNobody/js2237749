

      const jsonData = require ('./mercando.json');
function principal(control) {
    return new Promise(
        function (resolve, reject) {
            if (control) {
                setTimeout(() => {
                    resolve();
                }, 4000);
            }
            else{
                reject();
            }
        }
    )
}
function producto1(jsonData) {
    for (const key in jsonData[0]) {
        console.log(`${key}: ${jsonData[0][key]}`);
    }
}
function producto2(jsonData) {
    for (const key in jsonData[1]) {
        console.log(`${key}: ${jsonData[1][key]}`);
    }
}
function producto3(jsonData) {
    for (const key in jsonData[2]) {
        console.log(`${key}: ${jsonData[2][key]}`);
    }
}
function producto4(jsonData) {
    for (const key in jsonData[3]) {
        console.log(`${key}: ${jsonData[3][key]}`);
    }
}

function Caja1(){
    console.log(`
    El dinero alcanzo para toda la lista`);
}
function Caja2(){
    console.log(`
    El dinero no alcanza para toda la lista hay que sacar cosas`);
}

async function impresion() {//Funcion que hace uso de async y await
    try {//Esto ocurre
        await principal(true)//Llamado de la funcion con argumento
        await Caja1()//Asigna funcion a callback resolve
    } catch (error) {//excepcion
        await Caja2()//Asigna funcion a callback reject
    }
}
impresion()//Llamado de la funcion async
producto1(jsonData)
producto2(jsonData)
producto3(jsonData)
producto4(jsonData)
