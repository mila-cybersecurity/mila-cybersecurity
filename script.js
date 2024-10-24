// Función para abrir una ventana
function openWindow(windowId) {
    document.getElementById(windowId).style.display = 'block';
}

// Función para cerrar una ventana
function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

// Función para arrastrar las ventanas
function makeDraggable(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(element.id + "-header")) {
        // Si hay un header, haz que sea el lugar desde donde se arrastra
        document.getElementById(element.id + "-header").onmousedown = dragMouseDown;
    } else {
        // Si no hay header, entonces arrastra desde cualquier lugar dentro del elemento
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Posición del mouse al comienzo del evento
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calcular las nuevas posiciones del cursor
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Establecer la nueva posición del elemento
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Detener el movimiento cuando se suelta el mouse
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Hacer las ventanas movibles
document.addEventListener("DOMContentLoaded", function () {
    makeDraggable(document.getElementById("myDocuments"));
    makeDraggable(document.getElementById("aboutMe"));
    makeDraggable(document.getElementById("readme"));
});
