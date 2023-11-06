"use strict";

let edad;

while (true) {
    edad = prompt("Bienvenido a mi proyecto de JavaScript, indique su edad");

    if (!isNaN(edad)) {
    edad = parseInt(edad);

    if (edad >= 18) {
        alert("Puedes ingresar, eres mayor de 18 años.");
        console.log("Edad ingresada: " + edad);
        break; // Salir del bucle si la edad es válida y mayor o igual a 18.
    } else {
        alert("No puedes ingresar, sitio para mayores de 18 años.");
    }
}   else {
    alert("No ingresaste una edad válida. Por favor, ingresa un número válido.");
    }
}