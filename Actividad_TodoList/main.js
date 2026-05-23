// Para traer la informacion, del html
const formulario = document.getElementById("userInput");
const campoTexto = document.getElementById("taskInput");
const contenedor = document.getElementById("list-container");
const estadisticas = document.getElementById("stats"); 

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    let textoTarea = campoTexto.value;
    
    const nuevaTarea = document.createElement("div");
    nuevaTarea.className = "task container";
    
    nuevaTarea.innerHTML = `
        <input type="checkbox">
        <label>${textoTarea}</label>
        <img src="./images/recycle-bin.png" class="closeBton">
    `;
    
 
    const botonCerrar = nuevaTarea.querySelector(".closeBton");
    botonCerrar.addEventListener("click", function() {
        nuevaTarea.remove();
        actualizarEstadisticas(); 
    }); 

    const tareaOk = nuevaTarea.querySelector('input[type="checkbox"]');
    tareaOk.addEventListener("click", function() {
        actualizarEstadisticas(); 
    });
    
    contenedor.appendChild(nuevaTarea);
   
    
    actualizarEstadisticas();
});


function actualizarEstadisticas() {
    const totalTareas = contenedor.querySelectorAll(".task.container").length;
   
    const completadas = contenedor.querySelectorAll('input[type="checkbox"]:checked').length;
    const pendientes = totalTareas - completadas;
    
    estadisticas.innerHTML = `Tareas Pendientes : ${pendientes} Tareas Completadas: ${completadas}`;
} 