
// Una función sin parámetros que devuelva siempre "true"

function Devolver(){
    console.log(true)
};

Devolver();



//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function pruebaAsincrona(){
    console.log('Hola soy una Promesa')
}

setTimeout(pruebaAsincrona, 5000);


function* generaId(){
    let id = 0
    while(true){
        id++
        if(id === 10){
            return id
        }
        yield id
    }
    
}

const gen = generaId();

//Una función generadora de índices pares automáticos
console.log(gen.next().value * 2)
console.log(gen.next().value * 2)
console.log(gen.next().value * 2)
console.log(gen.next().value * 2)
console.log(gen.next().value * 2)
