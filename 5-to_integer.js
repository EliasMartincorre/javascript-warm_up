#!/usr/bin/node
/**
Para resolver esta task, se recurre a la funcion isNaN, la cual devuelve true si un valor no es un numero, la procedemos de la funcion parseInt() la cual se encarga de convertir un string y devolver un numero entero. Si el valor no es un numero se ejecuta el els e imprime en consola, "Not a number"
**/

if (!isNaN(parseInt(process.argv[2]))){
	console.log("My number:", parseInt(process.argv[2]));
}else{
	console.log("Not a number"); }
