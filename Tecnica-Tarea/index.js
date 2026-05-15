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


//EJERCICIO NUMERO 5
let celcius=parceInt(prompt("Ingrese la temperatura en grados Celcius: "));
if(isNaN(celcius)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let fahrenheit=(celcius*9/5)+32;
    console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);
}

//EJERCICIO NUMERO 6
let edad=parseInt(prompt("Ingrese su edad: "));
if(isNaN(edad)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(edad>=18){
    console.log(`Eres mayor de edad`);
}else{
    console.log(`Eres menor de edad`);
}

//EJERCICIO NUMERO 7
let NumeroMayor1=parseInt(prompt("Ingrese un numero: "));
let NumeroMayor2=parseInt(prompt("Ingrese otro numero: "));
if(isNaN(NumeroMayor1) || isNaN(NumeroMayor2)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(NumeroMayor1>NumeroMayor2){
    console.log(`El numero mayor es: ${NumeroMayor1}`);
}else if(NumeroMayor2>NumeroMayor1){
    console.log(`El numero mayor es: ${NumeroMayor2}`);
}else{
    console.log(`Los numeros son iguales`);
}

//EJERCICIO NUMERO 8
let nota1=parseFloat(prompt("Ingrese la primera nota: "));
let nota2=parseFloat(prompt("Ingrese la segunda nota: "));
let nota3=parseFloat(prompt("Ingrese la tercera nota: "));
if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let promedio=(nota1+nota2+nota3)/3;
    console.log(`El promedio de las notas es: ${promedio}`);
}

//EJERCICIO NUMERO 9
let numeroPar=parseInt(prompt("Ingrese un numero: "));
if(isNaN(numeroPar)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(numeroPar%2===0){
    console.log(`El numero es par`);
}else{
    console.log(`El numero es impar`);
}

//EJERCICIO NUMERO 10
let numeroPositivo=parseInt(prompt("Ingrese un numero: "));
if(isNaN(numeroPositivo)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(numeroPositivo>0){
    console.log(`El numero es positivo`);
}else if(numeroPositivo===0){
    console.log(`El numero es cero`);
}else{
    console.log(`El numero es negativo`);
}

//EJERCICIO NUMERO 11
let precio=parseFloat(prompt("Ingrese el precio del producto: "));
if(isNaN(precio)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(precio>100){
    console.log(precio)
}else if(precio>100 && precio<150){
    let descuento1=precio*0.90;
    console.log(`El precio con descuento es: ${descuento1}`);
}else if(precio>150){
    let descuento2=precio*0.85;
    console.log(`El precio con descuento es: ${descuento2}`);
}

//EJERCICIO NUMERO 12
let edades=parseInt(prompt("Ingrese su edad: "));
if(isNaN(edades)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(edades>=0 && edades<=12){
    console.log(`Eres un niño`);
}else if(edades>12 && edades<18){
    console.log(`Eres un adolescente`);
}else{
    console.log(`Eres un adulto`);
}

//EJERCICIO NUMERO 13

//EJERCICIO NUMERO 14
let menu=prompt("Seleccione una opcion: \n1. Saludar \n2. mostrar fecha \n3. mostrar un mensaje motivacional \n4. salir");
switch(menu){
    case "1":
        console.log(ingresarNombre(nombre));
        break;
    case "2":
        let fecha="14/05/2026";
        console.log(`La fecha actual es: ${fecha}`);
        break;
    case "3":
        console.log(`Nunca te rindas, el éxito está a la vuelta de la esquina.`);
        break;
    case "4":
        console.log(`Gracias por usar el programa, hasta luego!`);
        break;
    default:
        console.log(`Opcion no valida, por favor seleccione una opcion del 1 al 4`);
        break;
}

//EJERCICIO NUMERO 15
let anio=parseInt(prompt("Ingrese un año: "));
if(isNaN(anio)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if((anio%400===0) || (anio%4===0)){
    console.log(`El año ${anio} es bisiesto`);
}
else{
    console.log(`El año ${anio} no es bisiesto`);
}

//EJERCICIO NUMERO 16
let numero1=parseInt(prompt("Ingrese el primer numero: "));
let numero2=parseInt(prompt("Ingrese el segundo numero: "));
let numero3=parseInt(prompt("Ingrese el tercer numero: "));
if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(numero1>numero2 && numero1>numero3){
    console.log(`El numero mayor es: ${numero1}`);
}else if(numero2>numero1 && numero2>numero3){
    console.log(`El numero mayor es: ${numero2}`);
}else if(numero3>numero1 && numero3>numero2){
    console.log(`El numero mayor es: ${numero3}`);
}else{
    console.log(`Los numeros son iguales`);
}

//EJERCICIO NUMERO 17
let nota=parseInt(prompt("Ingrese una nota entre 0 y 10: "));
if(isNaN(nota)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(nota>=9 && nota<=10){
        console.log(`Su calificación es A. (Excelente)`);
    }else if(nota>=7 && nota<9){
        console.log(`Su calificación es B. (Bueno)`);
    }else if(nota>=5 && nota<7){
        console.log(`Su calificación es C. (Regular)`);
    }else if(nota>=0 && nota<5){
        console.log(`Su calificación es D. (reprobado)`);
    }else if(nota<0){
        console.log(`solo se permiten numeros positivos entre 0 y 10, sin dejar vacio`);
    }else if(nota>10){
        console.log(`solo se permiten numeros entre 0 y 10, sin dejar vacio`);
    }

//EJERCICIO NUMERO 19
//let numero=parseInt(prompt("Ingrese un numero: "));
//if(isNaN(numero)){
//    console.log(`solo se permiten numeros, sin dejar vacio`);   
//}else
    for(let i=1; i<=10; i++){
//        let resultado=numero*i;
//        console.log(`${numero} x ${i} = ${resultado}`);
        console.log(i);
    }

//EJERCICIO NUMERO 20
