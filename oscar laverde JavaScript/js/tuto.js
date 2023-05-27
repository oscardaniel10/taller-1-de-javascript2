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

/*let numero1;
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
*/

/*let num1 = "7";
let num2 = "5";
let operacion = Number(num1) + Number(num2);

document.write(operacion);
*/

/*let num1 = 7;
let transformaNumber = toString(num1);

document.write(typeof(transformaNumber));
*/

//Switch

/*let estacion = prompt("Escriba un estacion en minuscula");

switch(estacion){
    case "invierno":
    alert("Todo es frio");
    break;

    case "primavera":
        alert("Se colorea el mundo");
        break;

        case "verano":
            alert("Las noches se hacen largar");
            break;

            case "otoño":
                alert("Donde habia color ya no queda nada");
                break;

                default:
                    alert("Eso no es una estacion");
                    break;
}
*/

/*let operaciones = prompt("Escriba que desea realizar, ejm. suma, resta, multiplicacion, division. TODO EN MINUSCULA!!");


switch(operaciones){

    case "suma":
    let numero1 = prompt("Escriba el primer numero a sumar");
    let numero2 = prompt("Escriba el segundo numero a sumar");

    total= Number(numero1) + Number (numero2);

    alert("El resultado de la suma es " + total )
    break;

    case "resta":
        let rest1 = prompt("Escriba el primer numero a restar");
        let rest2 = prompt("Escriba el segundo numero a restar");

        total2= Number(rest1) - (rest2);
        alert("El resultado de la resta es " + total2)
        break;


        case "multiplicacion":
           let mult1 = prompt("Escriba el primer numero a multiplicar");
            let mult2 = prompt("Escriba el segundo numero a multiplicar");

            total3 = Number (mult1) * (mult2);
            alert("El resultado de la multiplicacion es " + total3);

            break;

            case "division":
                let div1 = prompt("Escriba el primer numero a dividir");
                let div2 = prompt("Escriba el segundo numero a dividir");

                total4 = Number (div1) / (div2);

                alert("El resultado de la division es " + total4);
                break;

                default:
                    alert("Eso no es una operacion");
                    break;
}
*/


/*let Nombre = prompt("Escriba su nombre")
let preguntasR = prompt("Escriba la cantidad de preguntas que se le realizaron")
let preguntasCC = prompt("Escriba la cantidad de preguntas contestadas correctamente")

total = Number(preguntasCC) * 100;

total2 = Number(total) / Number(preguntasR)

if (total2 >=90) {

    alert(Nombre + "Obtuviste un nivel superior " + "tu pocentaje " + total2 +"%");

    
}else if (total2 >= 75 && total2<90 ) {
    alert(Nombre + "Obtuviste nivel medio " + "tu porcentaje " + total2 +"%");

}else if (total2 >= 50 && total2<90) {
    alert(Nombre + "Obtuviste un nivel regular " + "tu porcentaje " + total2 +"%");

    
}else{
    alert(Nombre + " Estas fuera de nivel " + " tu porcentaje " + total2 +"%");
}

*/

//Estructura for


    /*let tabla = 5; 
    for (let f = 1; f <= 10; f++) {
        document.write(tabla + '-')
        tabla = tabla +5;

    }
*/

/*let number = 0;
for (let i = 0; i < 10; i++) {
  let numero =parseInt(prompt("Ingrese un numero"))

if(i > 5){
  number+= numero;
}
}
alert("La suma de los ultimo valores registrados es: " + number)
*/

let numero = prompt("Ingrese la tabla a multiplicar");

    for (let f = 1; f <= 10; f++) {
        document.write(tabla + '-')
        tabla = tabla + numero;
    }