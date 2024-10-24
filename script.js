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

// Función para ir a una carpeta y mostrar su contenido
function openFolder(folderId) {
    const folders = ['scriptsFolder', 'hackTheBoxFolder', 'bugBountyFolder'];
    const windowId = 'myDocuments';
    
    // Cerrar todas las carpetas
    folders.forEach(id => {
        const folderElement = document.getElementById(id);
        if (folderElement) {
            folderElement.style.display = 'none';
        }
    });
    
    // Abrir la carpeta seleccionada
    document.getElementById(folderId).style.display = 'block';
}

// Función para volver a la carpeta anterior
function goBack(currentWindow, parentWindow) {
    closeWindow(currentWindow);
    openWindow(parentWindow);
}

// Función para inicializar el redimensionamiento
function initResize(e, windowId) {
    e.preventDefault();
    const windowElement = document.getElementById(windowId);
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = windowElement.offsetWidth;
    const startHeight = windowElement.offsetHeight;

    function resize(e) {
        const newWidth = startWidth + (e.clientX - startX);
        const newHeight = startHeight + (e.clientY - startY);
        if (newWidth > 200 && newHeight > 150) { // Tamaño mínimo
            windowElement.style.width = newWidth + 'px';
            windowElement.style.height = newHeight + 'px';
        }
    }

    function stopResize() {
        document.documentElement.removeEventListener('mousemove', resize);
        document.documentElement.removeEventListener('mouseup', stopResize);
    }

    document.documentElement.addEventListener('mousemove', resize);
    document.documentElement.addEventListener('mouseup', stopResize);
}

// Hacer todas las ventanas movibles
document.addEventListener("DOMContentLoaded", function() {
    const windows = ['myDocuments', 'aboutMe', 'readme', 'imagesFolder'];
    windows.forEach(windowId => {
        makeDraggable(document.getElementById(windowId));
    });
});

// Función para arrastrar ventanas
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
        element.style.transform = "none"; // Desactiva la transformación para arrastrar
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
