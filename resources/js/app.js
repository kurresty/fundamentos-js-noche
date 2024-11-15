document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";

//salida de datos
window.alert("Hola, como estas?");
window.alert(5+2);
console.log(6+2);


//Declaracion de Variables
let a,b,c;
const M = 8;
a = 5;
b = 6;
c = a +b;
document.getElementById("demo").innerHTML = c;

//Tiposs de datos 
let num = 24;  //numero entero 
let name = "Dayana Lopez" //Cadena de caracteres 
let km = 14.5; // Numero Decimal
let persona = {firstName: "Ana",lastName:"Perez"}; //Objeto

let y = 17 + "POO";
let q = "17" + "POO";
document.getElementById("demo").innerHTML = y, q;


let num1 = 8; num2 = 4;
let suma, resta, multiplicacion, division;
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division  = num1 / num2;

document.getElementById("operaciones").innerHTML =
"La summa es: " + suma + "La resta es: " + resta + "La multiplicacion es: " + multiplicacion + 
"La division es: " + division;


//Operadores de comparacion 
let edad = 24;
document.getElementById("comparacion").innerHTML = (edad >= 18);

//Operadores logicos
let num4 = 6, num5 = 3;
document.getElementById("logicos").innerHTML = 
(num4 < 10 && num5 > 1) + "<br>" + (num4 < 10 && num5 < 1);

// Funciones 
function myFunction(){
    document.getElementById("demo").innerHTML = "New paragraph";
}