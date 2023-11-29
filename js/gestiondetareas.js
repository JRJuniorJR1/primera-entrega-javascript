"use strict";

let listaTareas = [];


function agregarTarea() {
    let nuevaTarea = document.getElementById("nuevaTarea").value.trim();

    if (nuevaTarea !== "") {
        listaTareas.push({
            tarea: nuevaTarea,
            completada: false
        });
        mostrarTareas();
        document.getElementById("nuevaTarea").value = "";
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
}

// Función para mostrar las tareas en la interfaz
function mostrarTareas() {
    let listaTareasElement = document.getElementById("listaTareas");
    listaTareasElement.innerHTML = ""; 

    listaTareas.forEach((tarea, index) => {
        let tareaElement = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;
        checkbox.onchange = function() {
            tarea.completada = !tarea.completada;
            mostrarTareas();
        };


        tareaElement.appendChild(checkbox);
        tareaElement.appendChild(document.createTextNode(`${tarea.tarea}`));
        if (tarea.completada) {
            let completadoTexto = document.createElement("span");
            completadoTexto.textContent = " (Completado)";
            tareaElement.appendChild(completadoTexto);
        }

        listaTareasElement.appendChild(tareaElement);
    });
}

function vaciarListaTareas() {
    listaTareas = [];
    mostrarTareas();
}
