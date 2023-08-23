
var miArray = [];


while (true) {
    var valorIngresado = prompt("Ingresa un valor (o escribe 'fin' para terminar):");

    if (valorIngresado.toLowerCase() === "fin") {
        break; 
    } else if (valorIngresado.trim() !== "") {
        miArray.push(valorIngresado); 
    }
}

console.log("Array resultante:", miArray);
