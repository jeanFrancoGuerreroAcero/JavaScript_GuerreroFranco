//ejercicio 1

//acorde a la edad de la persona mostrar en que año nacio 


function resta(){
    return año-numero1
};

let numero1 = prompt("ingresa tu edad: ");
let año = prompt("ingresa el año en que estas.");

result= resta();
console.log(result);


function grados(){
    return 32+(9*celsius/5)
}

let celsius = prompt("ingrese los grados celsius para hacer la conversion: ")

resultado= grados()
console.log(resultado);

function orden(){
    if (
        llegada <= 20){
            descuento=("va a tener descuento de 30%")
        }    

    else if(
        llegada<=50){
            descuento=("va a tener descuento de 10%")
        }
    else if(
        llegada>50){
            descuento=("no va a tener descuento")
        }
        
    return descuento
}

llegada= prompt("ingrese la orden de llegada: ");
resultado= orden();
console.log(resultado);

function multipli(a,b){
    multi = a * b;

    return multi;
}

console.log(multipli(2,5));

//
function sumar(){
    suma = 3+2
    return (suma)
}
console.log(sumar())

function nombre(a){
    console.log("Hola ", a);
}

nombre("pedro");

function pepe(){
    console.log("hola pepe");
}

pepe()