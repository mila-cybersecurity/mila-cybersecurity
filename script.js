// Función para abrir una ventana con un tamaño específico
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

// Función para alternar el tamaño de la ventana
function toggleResize(windowId) {
    const windowElement = document.getElementById(windowId);
    const isSmall = windowElement.style.width === '500px'; // Comprueba si está en tamaño pequeño
    
    // Definición de tamaños
    let windowWidth, windowHeight;
    if (window.innerWidth < 600) { // Si el ancho de la ventana es menor que 600px (móvil)
        windowWidth = '90%'; // 90% del ancho de la pantalla
        windowHeight = isSmall ? '400px' : '90%'; // Altura fija si está pequeña, flexible si está grande
    } else { // Si es una pantalla más grande (computadora)
        windowWidth = isSmall ? '500px' : '600px'; // 500px si está pequeña, 600px si está grande
        windowHeight = isSmall ? '400px' : '600px'; // Altura fija para ambas condiciones
    }

    windowElement.style.width = windowWidth; // Cambia el ancho
    windowElement.style.height = windowHeight; // Cambia la altura

    if (!isSmall) {
        centerWindow(windowElement); // Centrar solo si se expande
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
