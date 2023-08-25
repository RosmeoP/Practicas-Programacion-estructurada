let numbers = [
    1, 2, 3, 4
]

numbers.push(5, 6, 7)  //agrega elementos a un array 

console.log(numbers);

let fruits = [
    "Apple", "Orange", "Kiwi", "Watermelom"
]

let ultFruits = fruits.pop() //elimina el ultimo valor del array y lo retorna 

console.log(ultFruits);
console.log(fruits);


//unshift(): Agrega uno o más elementos al inicio del array
let colors = [
    "Green", "Red", "Blue", "Orange"
]

colors.unshift("Black", "White")

console.log(colors);

//shift(): Elimina y devuelve el primer elemento del array

let countrys = [
    "El Salvador", "Spain", "Uk", "E.E.U.U.", "Japan"
]

countrys.shift()
let ultCountrys = countrys.shift()
console.log(ultCountrys);
console.log(countrys);

// concat(): Combina dos o más arrays para crear un nuevo array.

let videogames = [
    "Warzone", "Elden ring", "Fortnite", "Minecraft"
]

let ultGames = [
    "COC", "Mortal KOmbat"
]

let concatArrays = videogames.concat(ultGames)

console.log(concatArrays)

let combArrays2 = ultGames.concat(videogames)

console.log(combArrays2);

//slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados


let ArrayOriginal = [1,2,3,4,5,6,7]

let copyarray = ArrayOriginal.slice(1,4)
console.log(copyarray);

//splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

let frutas = [
    "Bananas", "Manzanas", "Pera", "Uvas"
]

let removefrutas = frutas.splice(2,1, "Uvas")

console.log(removefrutas)