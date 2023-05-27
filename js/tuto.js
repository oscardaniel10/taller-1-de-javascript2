/*let mensaje;
let variable = 123456;
mensaje = "Estoy aprendiendo java";
alert(mensaje);
alert(variable);

var color1 = "Rojo";
console.log(color1);
var color1 = "Azul";
console.log(color1);
*/

/*let variable = 123456;
variable='Estoy aprendiendo JS';
alert(typeof(variable));*/

/*let frase = 'Estoy aprendiendo a programar en JS'
alert(`datatype de frase = ${typeof(frase)}`);
*/

/*let frase = 'Hola mundo desde variable que era numero';
alert(`datatype de frase = ${typeof(frase)}`);
let entero = 10;
alert(`datatype de entero = ${typeof(entero)}`);
let flotante = 10.5;
alert(`datatype de flotante = ${typeof(flotante)}`);
let boolean = true;
alert(`datatype de booleano = ${typeof(boolean)}`);
let gran_entero = 90071992564687962343242;
alert(`datatype de gran entero = ${typeof(gran_entero)}`);
*/

/*let name = prompt("¿Cual es tu nombre?");
let age = prompt("¿Cuantos años tienes? ");
document.write("Bienvenid@ " + name + " tienes " + age + " años! ");
*/

/*var t = "Hola";
console.log(t[0]);
var frase = "Texto en mayus";
console.log(frase.toLowerCase());
var otrafrase = "Muchas, comas, aqui";
console.log(otrafrase.split(", "));
*/

/*console.log(5+5.5);
console.log(5-5.5);
console.log(10*30);
console.log(10/30);
console.log(1%3);
console.log(2**3);
*/

/*console.log(5 > 5.5);
console.log(5< 5.5);
console.log(10 == 10);
console.log(10 == 30);
console.log(1 != 3);
*/


/*
let x = prompt("Ingrese el dato a comparar");

if(x > 0) {
    console.log("X es mayor que 0");

}else {
    console.log("X es menor o igual a 0");
}
*/

/*Reto 1 
let temperatura;
let total;
temperatura = prompt("Abuela introduce la temperatura de tu horno!");

total = temperatura - 32/1.8;


    alert(" Abuela tu horno esta a " + total + " Grados centigrados");
*/



/*
let numero;

numero = prompt("Ingresa el número");

if(numero > 0){

    alert("El número ingresado es positivo")

} else {
    numero < 0;
    prompt("El numero ingresado es negativo")
}

*/

/*let numero1;
let numero2;

numero1 = prompt("Ingresa el primer numero");
numero2 = prompt("Ingresa el segundo numero");

if(numero1 > numero2){
    prompt("El numero mayor es el " + numero1 + " y el numero menor es el " + numero2  )

}else {
    numero2 > numero1;
        prompt("El numero mayor es el " + numero2 + " y el numero menor es el " + numero1)
    }

*/

let numero1;
let numero2;
let numero3;

numero1 = prompt("Ingresa el primer numero");
numero2 = prompt("Ingresa el segundo numero");
numero3 = prompt("Escriba el tercer numero");

if(numero1 > numero2 && numero3 < numero1 && numero3 <numero2){
    prompt("El numero mayor es el " + numero1 + " el que le sigue es el " + numero2  +  " y el numero menor es el  " + numero3  )

}else {
    numero2 > numero1 && numero3 <numero2 && numero3 <numero1;
        prompt("El numero mayor es el " + numero2 + " el numero que le sigue es el " + numero1 + " y el numero menor es el " + numero3)
    }

    if(numero3 > numero2 && numero1 < numero2 &&numero1 < numero3){
        prompt("El numero mayor es el " + numero3 + " el numero que le sigue es el " +numero2 + " y el numero menor es el " +numero1)

    }
