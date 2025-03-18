// app.js

// Array para almacenar los nombres ingresados
let amigos = [];
// Capturar elementos del DOM
const inputAmigo = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const listaResultado = document.querySelector("#resultado");
const botonAgregar = document.querySelector(".button-add");
const botonSortear = document.querySelector(".button-draw");

// Mensaje de confirmación en la consola para verificar que los elementos fueron seleccionados correctamente
console.log("Elementos del DOM capturados:", {
    inputAmigo,
    listaAmigos,
    listaResultado,
    botonAgregar,
    botonSortear
});

/**
 * Función para agregar un amigo a la lista.
 */
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el nombre no esté duplicado 
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

   // Limpiar el resultado anterior del sorteo
   listaResultado.innerHTML = ""; 


    // Actualizar la lista en el DOM
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

/**
 * Función para actualizar la lista de amigos en el DOM.
 */
function actualizarListaAmigos() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre a la lista
    amigos.forEach((amigo, i) => {
        const li = document.createElement("li");
        li.textContent = amigo;
    
        // Crear un botón para eliminar el amigo
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        // Agregar evento para eliminar el amigo cuando se haga clic
        btnEliminar.addEventListener("click", () => {
            eliminarAmigo(i);
        });

        // Agregar el botón al elemento li y luego el li a la lista
        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para eliminar un amigo del array y actualizar el DOM.
 * @param {number} index - El índice del amigo a eliminar.
 */
function eliminarAmigo(index) {
    // Remover el amigo del array
    amigos.splice(index, 1);
    // Actualizar la lista en el DOM
    actualizarListaAmigos();
}

/**
 * Función para sortear el amigo secreto.
 */
function sortearAmigo() {
   // Verificar que haya al menos 2 amigos en la lista
   if (amigos.length < 2) {
    alert("Debe haber al menos dos amigos en la lista para realizar el sorteo.");
    return;
}

// Seleccionar un índice aleatorio
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSeleccionado = amigos[indiceAleatorio];

// Mostrar el resultado en la lista de resultados
listaResultado.innerHTML = ""; // Limpiar resultados anteriores
const li = document.createElement("li");
li.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
listaResultado.appendChild(li);

// Eliminar al amigo seleccionado de la lista
amigos.splice(indiceAleatorio, 1);
actualizarListaAmigos(); // Refrescar la lista en pantalla
}

// Mensaje de confirmación en la consola para verificar que el script se ha cargado correctamente
console.log("app.js cargado correctamente");
