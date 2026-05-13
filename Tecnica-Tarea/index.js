const prompt = require('prompt-sync')();

//EJERCICIO NUMERO 1
function noSimbolos(texto) {
    let regla=/[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
    return regla.test(texto);
}
let nombre=prompt("Ingrese su nombre: "); 
if(nombre.trim()==="" || nombre===null){
console.log(`no dejar vacio`);
} else if(!isNaN(nombre)){ 
    console.log(`solo se permiten letras`);
}else if(!noSimbolos(nombre)){
    console.log(`no se permiten simbolos`);
}else{
    console.log(`Hola como estas ${nombre}`);
}

//EJERCICIO NUMERO 2
let numero1=parseFloat(prompt("Ingrese primer numero: "));
let numero2=parseFloat(prompt("Ingrese segundo numero: "));
if(isNaN(numero1) || isNaN(numero2)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let resultado=numero1+numero2;
    console.log(`El resultado de la suma es: ${resultado}`);
}

//EJERCICIO NUMERO 3
let numero=parseInt(prompt("Ingrese un numero: "));
if(isNaN(numero)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let doble=numero*2;
    let triple=numero*3;
    console.log(`el numero ${numero} su doble es: ${doble} y su triple es: ${triple}`);
}

//EJERCICIO NUMERO 4
let base=parseFloat(prompt("Ingrese la base del triangulo: "));
let altura=parseFloat(prompt("Ingrese la altura del triangulo: "));
if(isNaN(base) || isNaN(altura)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let area=(base*altura)/2;
    console.log(`El area del triangulo es: ${area}`);
}

