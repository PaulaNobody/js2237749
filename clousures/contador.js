// //ALCANCIA
function alcancia(){
    let ahorro=0;
    function guardar(monedas){
        ahorro=ahorro+monedas;
        // console.log ("Tiene $"+ahorro);
        console.log (`Tiene $ ${ahorro} pesos`);
    }
    return guardar;
}
// const pedro=alcancia();
// const maria=alcancia();
// pedro(100);
// maria(1);
// pedro(200);
// maria(5);

// 
function contadorcito(contador=0){
    return{
        incrementar: function(){
            contador=contador + 1;
            return contador;
        },
        decrementar: function(){
            contador=contador -1;
        },
        valort: function(){
            return contador;
        }
    } ; 
}
// const c1=contadorcito(100);
// console.log(c1.incrementar())

 function contadorcito(){
    var contador=0;
 function incrementar(){

        contador=contador + 1;
        return contador;
    };
    return incrementar;
}
// var cont1 = contadorcito();
// cont1();
// console.log(cont1())
// console.log(cont1())

