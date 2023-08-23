//alert("Mensaje de alerta en js")
/*console.log("You´re using the console");
console.log("2");
console.log(1.2);
console.log("true");
console.log("false");*/

/*var x = 11 var puede sobre escribir variables lo cual seria poco trcomendable utilizar
console.log(x);
x = 21
console.log(x);

x = x + 1
console.log(x);
*/

/*let y = 5 let puede sobre escribirla una vez
console.log(y);

let y = 20
console.log(y);
*/

//const es un valor fijo, no se puede re escribir 

/*
const pi = 3.1416
console.log(pi);
*/

//alert("Mi nombre es Rosmeo Mauricio y tengo 19 años")

/*let nombre = "Rosmeo Mauricio"
console.log(nombre);

let edad = 19 
console.log(edad);
let mensaje = "Mi nombre es: " + nombre + " Y tengo " + edad 
console.log(mensaje);

const numero = parseInt(prompt("Ingrese un numero para crear una tabla de mutiplicar: "))

console.log(`La tabla de multiplicar del ${numero}`);

for (let i = 1; i <=10; i++){
    const resultado = numero * i
    console.log(`${numero} *  ${numero} = ${resultado}`)


}
*/

const numero = parseInt(prompt("Ingrese un numero para determinar si es negativo o positivo "))

if (numero > 0){
    console.log(`El numero ${numero} es positivo`);

}else if (numemro < 0){
    console.log(`El numero ${numero} es negativo`);

} else{
    console.log("El numero no es valuido");
}

