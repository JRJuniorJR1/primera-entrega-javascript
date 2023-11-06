"use strict";

function ingresaNumero(mensaje) {
    let numero = Number(prompt(mensaje));
    while (isNaN(numero)) {
        numero = Number(prompt("Lo ingresado no es un número. " + mensaje));
    }
    return numero;
}

let opcion;
do {
    opcion = prompt("Ingrese la opción deseada: + | - | * | / | ó x para finalizar");

    if (opcion === "x") {
        break;
    }

    if (opcion === "+" || opcion === "-" || opcion === "*" || opcion === "/") {
        let num1 = ingresaNumero("Ingrese un número");
        let num2 = ingresaNumero("Ingrese un número");

        switch (opcion) {
            case "+":
                alert("El resultado de la suma es: " + (num1 + num2));
                break;
            case "-":
                alert("El resultado de la resta es: " + (num1 - num2));
                break;
            case "*":
                alert("El resultado de la multiplicación es: " + num1 * num2);
                break;
            case "/":
                if (num2 === 0) {
                    alert("No se puede dividir por cero.");
                } else {
                    alert("El resultado de la división es: " + num1 / num2);
                }
                break;
            default:
                alert("Opción incorrecta");
        }
    } else if (opcion !== "x") {
        alert("Opción no válida. Ingrese +, -, *, / ó x para finalizar.");
    }
} while (opcion !== "x");

console.log(numero)
