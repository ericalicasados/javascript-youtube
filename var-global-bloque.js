// Como declarar VARIABLES

var text = 'holamundo';

console.log( text );

// OTROS EJAMPLOS VARIABLES GLOBALES SON MALA PRACTICA

var musica = 'rock';
console.log("variable musica antes del bloque", musica); // rock
{
    var musica = "Pop";
    console.log("Variable musica dentro del bloque", musica); // Pop
}
console.log("Variable Musicadespues del bloque", musica); // Pop

// variables de bloque Let SON UNS BUENA PRACTICA

let musica2 = 'rock';
console.log("variable musica antes del bloque", musica2); // rock
{
    let musica2 = "Pop";
    console.log("Variable musica dentro del bloque", musica2); // Pop
}
console.log("Variable Musicadespues del bloque", musica2);// rock

// OTRAS VARIABLES CONST

let a; //si se puede declarar una variable let sin valor y guardarla

const PI = 3.1416;
//const NUEVE; //no se puede declarar una variable (const) sin un valor
console.log( PI );

a = "Hatory"; // declaramos la variable con valor 
console.log( a );

// ***********************

/*let objeto = {
    nombre: "eric ali",
    edad: 35
}
let colores = ["blanco","negro","azul"];

console.log(objeto);
console.log(colores);

//le agregamos una propiedad al objeto con el (.) accedo a la propiedades

objeto.correo = "ali@gmail.com";
colores.push ("anaranjado");

console.log(objeto);
console.log(colores);*/

// CON (const)

const objeto = {
    nombre: "eric ali",
    edad: 35
}
const colores = ["blanco","negro","azul"];

console.log(objeto);
console.log(colores);

//le agregamos una propiedad al objeto con el (.) accedo a la propiedades

objeto.correo = "ali@gmail.com";
colores.push ("anaranjado");

console.log(objeto);
console.log(colores);