const prompt = require('prompt-sync')();

//EJERCICIO NUMERO 1 Solicitar el nombre del usuario y mostrar un saludo.
function noSimbolos(texto) {
    let regla=/[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
    return regla.test(texto);
}
function ingresarNombre(){
let nombre=prompt("Ingrese su nombre: "); 
if(nombre.trim()==="" || nombre===null){
return console.log(`no dejar vacio`);
} else if(!isNaN(nombre)){ 
    return console.log(`solo se permiten letras`);
}else if(!noSimbolos(nombre)){
    return console.log(`no se permiten simbolos`);
}else{
    return console.log(`Hola como estas ${nombre}`);
}
}
ingresarNombre();

//EJERCICIO NUMERO 2 Pedir dos números y mostrar su suma.
let numero1=parseFloat(prompt("Ingrese primer numero: "));
let numero2=parseFloat(prompt("Ingrese segundo numero: "));
if(isNaN(numero1) || isNaN(numero2)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let resultado=numero1+numero2;
    console.log(`El resultado de la suma es: ${resultado}`);
}

//EJERCICIO NUMERO 3 Pedir un número y mostrar su doble y triple.
let numero=parseInt(prompt("Ingrese un numero: "));
if(isNaN(numero)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let doble=numero*2;
    let triple=numero*3;
    console.log(`el numero ${numero} su doble es: ${doble} y su triple es: ${triple}`);
}

//EJERCICIO NUMERO 4 Solicitar los lados de un rectángulo y calcular su área.
let base=parseFloat(prompt("Ingrese la base del rectangulo: "));
let altura=parseFloat(prompt("Ingrese la altura del rectangulo: "));
if(isNaN(base) || isNaN(altura)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let area=base*altura;
    console.log(`El area del rectangulo es: ${area}`);
}

//EJERCICIO NUMERO 5 Convertir grados Celsius a Fahrenheit.
let celcius=parceInt(prompt("Ingrese la temperatura en grados Celcius: "));
if(isNaN(celcius)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let fahrenheit=(celcius*9/5)+32;
    console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);
}

//EJERCICIO NUMERO 6 Pedir edad y mostrar si es mayor de edad.
let edad=parseInt(prompt("Ingrese su edad: "));
if(isNaN(edad)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(edad>=18){
    console.log(`Eres mayor de edad`);
}else{
    console.log(`Eres menor de edad`);
}

//EJERCICIO NUMERO 7 Comparar dos números y mostrar cuál es mayor.
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

//EJERCICIO NUMERO 8 Calcular el promedio de 3 notas.
let nota1=parseFloat(prompt("Ingrese la primera nota: "));
let nota2=parseFloat(prompt("Ingrese la segunda nota: "));
let nota3=parseFloat(prompt("Ingrese la tercera nota: "));
if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else{
    let promedio=(nota1+nota2+nota3)/3;
    console.log(`El promedio de las notas es: ${promedio}`);
}

//EJERCICIO NUMERO 9 Determinar si un número es par o impar.
let numeroPar=parseInt(prompt("Ingrese un numero: "));
if(isNaN(numeroPar)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(numeroPar%2===0){
    console.log(`El numero es par`);
}else{
    console.log(`El numero es impar`);
}

//EJERCICIO NUMERO 10 Determinar si un número es positivo, negativo o cero.
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

//EJERCICIO NUMERO 11 Calcular descuento según monto de compra. (< $100 = 0% desc., entre >100 y < 150 = 10% desc., >150 = 15% desc.)
let precio=parseFloat(prompt("Ingrese el precio del producto: "));
let descuento=0;
let total=0;
if(isNaN(precio)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(precio<100){
    descuento=precio*0.00;
}else if(precio>100 && precio<150){
    descuento=precio*0.10;
}else if(precio>150){
    descuento=precio*0.15;
}
total=precio-descuento;
console.log(`El precio final del producto es: ${total}`);

//EJERCICIO NUMERO 12 Solicite al usuario su edad, valide que la edad sea un número positivo y muestre la categoría a la que pertenece. (Niño 0 a 12 años, Joven 13 a 17, Adulto 18 en adelante)
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

//EJERCICIO NUMERO 13 Defina un usuario y contraseña si mulando los registros de una BD. Solicite al usuario que por teclado ingrese un usuario y una contraseña. Presentar el usuario tiene Acceso Concedido o Denegado.
let usuario=prompt("Ingrese su nombre de usuario: ").toLowerCase();
let contraseña=prompt("Ingrese su contraseña: ").toLowerCase();
let usuario="administrador";
let password="12345";
    if(usuario==usuario && contraseña==password){
        return console.log("Acceso concedido.");
    }else{
        console.log("Acceso denegado.");
    }



//EJERCICIO NUMERO 14 Presentar un Menú con opciones básicas. Solicitar al usuario que elija una opción, presentar la funcionalidad seleccionada o caso contrario presentar mensaje de error.
let menu=prompt("Seleccione una opcion: \n1. Saludar \n2. mostrar fecha \n3. mostrar un mensaje motivacional \n4. salir \ingresar solo numeros: ");
switch(menu){
    case "1":
        let repuesta=ingresarNombre();
        break;
    case "2":
        let fecha=new Date().toLocaleDateString();
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

//EJERCICIO NUMERO 15 Validar si un año es bisiesto.
let anio=parseInt(prompt("Ingrese un año: "));
if(isNaN(anio)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if((anio%400===0) || (anio%4===0)){
    console.log(`El año ${anio} es bisiesto`);
}
else{
    console.log(`El año ${anio} no es bisiesto`);
}

//EJERCICIO NUMERO 16 Calcular el mayor de 3 números.
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

//EJERCICIO NUMERO 17 Un docente necesita evaluar el rendimiento de sus estudiantes. Solicite la nota de un estudiante (0 a 10), valide que esté dentro del rango correcto y Muestre la letra y el mensaje correspondiente.
let nota=parseInt(prompt("Ingrese una nota entre 0 y 10: "));
if(isNaN(nota)){
    console.log(`solo se permiten numeros, sin dejar vacio`);
}else if(nota===9 || nota===10){
        console.log(`Su calificación es A. (Excelente)`);
    }else if(nota===7 || nota===8){
        console.log(`Su calificación es B. (Bueno)`);
    }else if(nota===5 || nota===6){
        console.log(`Su calificación es C. (Regular)`);
    }else if(nota===0 || nota<=4){
        console.log(`Su calificación es D. (reprobado)`);
    }else if(nota<0){
        console.log(`solo se permiten numeros positivos entre 0 y 10, sin dejar vacio`);
    }else if(nota>10){
        console.log(`solo se permiten numeros entre 0 y 10, sin dejar vacio`);
    }

//EJERCICIO NUMERO 18 Usar operador ternario para validar acceso.
let edad=parseInt(prompt("Ingrese su edad: "));
let acceso=edad>=18 
? "Acceso concedido" 
: "Acceso denegado";
console.log(acceso);


//EJERCICIO NUMERO 19 Mostrar números del 1 al 10 con for.
let numero=10
    for(let i=1; i<=numero; i++){
        console.log(i);
    }

//EJERCICIO NUMERO 20 Sumar números ingresados por el usuario hasta que el usuario ingrese 0 (while).
let acertado=0
let suma=0
let c=0
let acu=1
while( c=acu){
    let acertado=parseInt(prompt("ingresar numero"));
    suma=suma+acertado
        if(acertado===0){
        console.log(suma);
        break
        }
c++
acu++
}

//EJERCICIO NUMERO 21 Solicite al usuario ingresar un número por teclado y presente la tabla de multiplicar de ese número.
let numero_multiplo=parseInt(prompt("Ingrese un numero: "));
if(isNaN(numero_multiplo)){
    console.log(`solo se permiten numeros, sin dejar vacio`);   
}else{
    for(let i=1; i<=12; i++){
    let resultado=numero_multiplo*i;
    console.log(`${numero} x ${i} = ${resultado}`);
    }
}

//EJERCICIO NUMERO 22 Solicitar ingresar al usuario un valor numérico (este será la longitud de un arreglo), posterior solicitar al usuario que ingrese la cantidad de valores dentro del arreglo. Contar y presentar cuántos números positivos ingresa el usuario.
let longitud=parseInt(prompt("Ingrese la longitud del arreglo: "));
if(isNaN(longitud) || longitud<=0){
    console.log(`solo se permiten numeros positivos, sin dejar vacio`);
}else{
    let arreglo=[];
    let positivos=0;
    for(let i=0; i<longitud; i++){
        let numero=parseInt(prompt(`Ingrese el numero ${i+1}: `));
        arreglo.push(numero);
    }
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i]>0){
            positivos++;
        }
    }
    return console.log(`La cantidad de números positivos ingresados es: ${positivos}`);
}

//EJERCICIO NUMERO 23 Definir un número. Solicitar al usuario que inserte un número hasta adivinar número (con intentos limitados). Brindar pistas de que tan cerca está el número, si el usuario se ha pasado o si está antes del valor.
let intentos=3
let adivinar=45
    for(let i=0;i<intentos;i++){
    let numeros=prompt("ingresar numero entre 1 y 50: ");
        if (numeros==adivinar){
        console.log("el numero que ingresaste es acertado");
        break
        }else if(numeros<adivinar){
        console.log("el numero esta despues del numero ingresado")
        }else if(numeros>adivinar){
        console.log("el numero esta antes del numero ingresado")
        }else{
        console.log("l numero que ingresaste es incorrecto");
        }
    }

//EJERCICIO NUMERO 24 Crear función para calcular promedio.
function calcularPromedio() {
    let cantidad_Notas = parseInt(prompt("Ingrese la cantidad de notas: "));
    let nota=0
    let suma=0
    for (let i = 0; i < cantidad_Notas; i++) {
        nota = parseFloat(prompt(`Ingrese la nota ${i + 1}: `));
        suma += nota;
    }
    let promedio = suma / cantidad_Notas;
    return promedio;
}
let respuesta = calcularPromedio();
console.log(`El promedio de las notas es: ${respuesta}`);

//EJERCICIO NUMERO 25 Función que determine si un número es primo.
function Numeros_primos() {
let numero=0, c, r=0;
numero=parseInt(prompt("Ingrese un numero: "));
primos="";
acu=2
divisores=0;
    for (c=1;c<=numero;c++){
    r=numero%c;
    if (r===0){
        divisores++;
        return console.log(`El numero ${numero} no es un numero primo.`);
    }
    if (divisores===2){
        if (primos===""){
            primos+=numero;
        } else {
            primos+=numero;
        return console.log(`El numero ${numero} es un numero primo.`);
        }
    }
    } 
}

//EJERCICIO NUMERO 26 Función recursiva para factorial.
function factorial() {
    let numero=parseInt(prompt("Ingrese un numero: "));
    if(isNaN(numero)){
        return console.log(`solo se permiten numeros, sin dejar vacio`);
    }else if(numero<0){
        console.log(`solo se permiten numeros positivos, sin dejar vacio`);
    }else if(numero===0 || numero===1){
        return 1;
    }else{
        return numero*factorial(numero-1);
    }
}

//EJERCICIO NUMERO 27 Sistema completo (Calculadore )
let sistema=prompt("seleccione una opcion: \n>menu \n>funciones \n>Escribir: ").toLowerCase();
switch(sistema){
    case "menu":
        let menu=prompt("Seleccione una opcion: \n>1. Area del rectangulo \n>2. Area del triangulo  \n>ingresar solo numeros: ");
        switch(menu){
            case "1":   
            let menu1=AreaDelRectangulo();
            break;
            case "2":
            let menu2=AreaDelTriangulo();
            break;
        }
    break;
    case "funciones":        
        let funciones=prompt("Seleccione una opcion: \n>1. suma \n>2. resta \n>3. multiplicacion \n>4. division \n>ingresar solo numeros: ");
        switch(funciones){        
        case "1":
            let funcion_suma=suma();
            break;
        case "2":
            let funcion_resta=resta();
            break;
        case "3":
            let funcion_multiplicacion=multiplicacion();
            break;
        case "4":
            let funcion_division=division();
            break;
        }
    }

function suma() {
    let candtidad_numeros=parseInt(prompt("Ingrese la cantidad de numeros a sumar: "));
    let suma=0;
    let numero=0;
    for(let i=0; i<candtidad_numeros; i++){
        numero=parseFloat(prompt(`Ingrese el numero ${i+1}: `));
        suma=numero+suma;
    }
    return console.log(`El resultado de la suma es: ${suma}`);
}
function resta() {
    let candtidad_numeros=parseInt(prompt("Ingrese la cantidad de numeros a restar: "));
    let resta=0;
    for(let i=0; i<candtidad_numeros; i++){
        let numero=parseFloat(prompt(`Ingrese el numero ${i+1}: `));
        resta=numero-resta;
    }
    return console.log(`El resultado de la resta es: ${resta}`);
}
function multiplicacion() {
    let candtidad_numeros=parseInt(prompt("Ingrese la cantidad de numeros a multiplicar: "));
    let multiplicacion=1;
    for(let i=0; i<candtidad_numeros; i++){
        let numero=parseFloat(prompt(`Ingrese el numero ${i+1}: `));
        multiplicacion=numero*multiplicacion;
    }
    return console.log(`El resultado de la multiplicacion es: ${multiplicacion}`);
}
function division() {
    let candtidad_numeros=parseInt(prompt("Ingrese la cantidad de numeros a dividir: "));
    let division=1;
    for(let i=0; i<candtidad_numeros; i++){
        let numero=parseFloat(prompt(`Ingrese el numero ${i+1}: `));
        division=numero/division;
    }
    return console.log(`El resultado de la division es: ${division}`);
}
function AreaDelRectangulo() {
    let base=parseFloat(prompt("Ingrese la base del rectangulo: "));
    let altura=parseFloat(prompt("Ingrese la altura del rectangulo: "));
    let area=base*altura;
    return console.log(`El area del rectangulo es: ${area}`);
}
function AreaDelTriangulo() {
    let base=parseFloat(prompt("Ingrese la base del triangulo: "));
    let altura=parseFloat(prompt("Ingrese la altura del triangulo: "));
    let area=(base*altura)/2;
    return console.log(`El area del triangulo es: ${area}`);
}
