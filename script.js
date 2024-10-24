// Función para abrir una ventana
function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
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

// Función para redimensionar la ventana
function toggleResize(windowId) {
    const windowElement = document.getElementById(windowId);
    const isSmall = windowElement.style.width === '240px'; // Tamaño pequeño
    if (isSmall) {
        windowElement.style.width = '600px'; // Tamaño grande
        windowElement.style.height = '600px'; // Tamaño grande
    } else {
        windowElement.style.width = '240px'; // Tamaño pequeño
        windowElement.style.height = '240px'; // Tamaño pequeño
    }
}

// Función para abrir una carpeta
function openFolder(folderId) {
    const folders = ['scriptsFolder', 'hackTheBoxFolder', 'bugBountyFolder'];
    folders.forEach(folder => {
        const folderElement = document.getElementById(folder);
        if (folderElement) {
            folderElement.style.display = 'none';
        }
    });
    document.getElementById(folderId).style.display = 'block';
}

// Función para volver a la carpeta anterior
function goBack(currentWindow, parentWindow) {
    closeWindow(currentWindow);
    openWindow(parentWindow);
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
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
