// Función para abrir una ventana
function openWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    windowElement.style.display = 'block';
    centerWindow(windowElement); // Centra la ventana cuando se abre
}

// Función para centrar la ventana al abrirla
function centerWindow(windowElement) {
    windowElement.style.top = "50%";
    windowElement.style.left = "50%";
    windowElement.style.transform = "translate(-50%, -50%)";
}

// Modificar la función de apertura de ventana para ajustar el tamaño de "Mis Documentos"
function openDocumentsWindow() {
    var windowElement = document.getElementById('myDocuments');
    windowElement.style.display = 'block';
    windowElement.style.width = "500px"; // Ajustar el ancho
    windowElement.style.height = "400px"; // Ajustar la altura
    centerWindow(windowElement);
}
