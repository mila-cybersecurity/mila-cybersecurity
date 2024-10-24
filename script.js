// Función para abrir una ventana
function openWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    windowElement.style.display = 'block';
    centerWindow(windowElement); // Centra la ventana cuando se abre
}

// Función para cerrar una ventana
function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

// Función para centrar la ventana al abrirla
function centerWindow(windowElement) {
    windowElement.style.top = "50%";
    windowElement.style.left = "50%";
    windowElement.style.transform = "translate(-50%, -50%)";
}

// Función para arrastrar ventanas
function makeDraggable(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.querySelector('.window-header').onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        element.style.transform = "none"; // Desactiva la transformación para arrastrar
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Función para inicializar el redimensionamiento
function initResize(e, windowId) {
    e.preventDefault();
    var windowElement = document.getElementById(windowId);
    windowElement.style.transition = "none"; // Desactiva la transición para redimensionar

    // Iniciar el redimensionamiento
    document.onmouseup = stopResize;
    document.onmousemove = elementResize;

    function elementResize(e) {
        windowElement.style.width = (e.clientX - windowElement.getBoundingClientRect().left) + "px";
        windowElement.style.height = (e.clientY - windowElement.getBoundingClientRect().top) + "px";
    }

    function stopResize() {
        document.onmouseup = null;
        document.onmousemove = null;
        windowElement.style.transition = "all 0.2s"; // Reactiva la transición
    }
}

// Hacer todas las ventanas movibles
document.addEventListener("DOMContentLoaded", function() {
    makeDraggable(document.getElementById('myDocuments'));
    makeDraggable(document.getElementById('aboutMe'));
    makeDraggable(document.getElementById('readme'));
    makeDraggable(document.getElementById('scriptsFolder'));
    makeDraggable(document.getElementById('hackTheBoxFolder'));
});
