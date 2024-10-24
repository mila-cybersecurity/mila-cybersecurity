// Función para abrir una ventana
function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'block';
    centerWindow(windowElement); // Centra la ventana cuando se abre
}

// Función para cerrar una ventana
function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
}

// Función para centrar la ventana al abrirla
function centerWindow(windowElement) {
    windowElement.style.top = "50%";
    windowElement.style.left = "50%";
    windowElement.style.transform = "translate(-50%, -50%)";
}

// Función para alternar el tamaño de la ventana entre dos estados en computadoras
function toggleResize(windowId) {
    const windowElement = document.getElementById(windowId);
    
    // En móviles, las ventanas no serán redimensionables
    if (window.innerWidth <= 768) {
        return;  // No permite el redimensionamiento en pantallas pequeñas
    }

    // Verifica el tamaño actual de la ventana y alterna entre dos tamaños fijos
    if (windowElement.style.width === '567px') {
        windowElement.style.width = '378px'; // Tamaño pequeño
        windowElement.style.height = '378px';
    } else {
        windowElement.style.width = '567px'; // Tamaño grande
        windowElement.style.height = '567px';
    }
}

// Hacer todas las ventanas movibles solo en pantallas grandes
document.addEventListener("DOMContentLoaded", function() {
    const windows = ['myDocuments', 'aboutMe', 'readme', 'imagesFolder'];
    
    // Hacer arrastrables solo en escritorio
    if (window.innerWidth > 768) {
        windows.forEach(windowId => {
            makeDraggable(document.getElementById(windowId));
        });
    }
});

// Función para arrastrar ventanas en escritorio
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
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
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
