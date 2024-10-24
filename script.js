// Función para abrir una ventana con un tamaño específico
function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'block';
    centerWindow(windowElement); // Centra la ventana cuando se abre
    setInitialSize(windowElement); // Establece el tamaño inicial
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

// Función para establecer el tamaño inicial de la ventana
function setInitialSize(windowElement) {
    windowElement.style.width = '10cm'; // Tamaño inicial de 10x10 cm
    windowElement.style.height = '10cm';
}

// Función para alternar el tamaño de la ventana
function toggleResize(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement.style.width === '15cm') {
        windowElement.style.width = '10cm'; // Regresar al tamaño pequeño
        windowElement.style.height = '10cm';
    } else {
        windowElement.style.width = '15cm'; // Cambiar a tamaño grande
        windowElement.style.height = '15cm';
    }
}

// Función para abrir una carpeta
function openFolder(folderId) {
    const windowElement = document.getElementById(folderId);
    const windowContent = windowElement.querySelector('.window-content');

    // Limpia el contenido de la ventana y añade el nuevo contenido
    windowContent.innerHTML = `
        <div class="icon" onclick="openScript('script1')">
            <img src="icons/blank.gif" alt="Script 1">
            <p>Script 1</p>
        </div>
        <div class="icon" onclick="openScript('script2')">
            <img src="icons/blank.gif" alt="Script 2">
            <p>Script 2</p>
        </div>
        <div class="icon" onclick="openScript('script3')">
            <img src="icons/blank.gif" alt="Script 3">
            <p>Script 3</p>
        </div>
        <button onclick="goBack('${folderId}', 'myDocuments')">Volver</button>
    `;

    windowElement.style.display = 'block'; // Muestra la ventana de la carpeta
}

// Función para abrir un script (simulando)
function openScript(scriptId) {
    alert(`Abriendo ${scriptId}`); // Simulación de abrir un script
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
