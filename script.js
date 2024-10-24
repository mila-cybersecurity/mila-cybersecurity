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

// Función para cerrar una ventana
function closeWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
}

// Modificar la función de apertura de ventana para ajustar el tamaño de "Mis Documentos"
function openDocumentsWindow() {
    var windowElement = document.getElementById('myDocuments');
    windowElement.style.display = 'block';
    windowElement.style.width = "500px"; // Ajustar el ancho
    windowElement.style.height = "400px"; // Ajustar la altura
    centerWindow(windowElement);
}

// Función para abrir una carpeta
function openFolder(folderId) {
    closeAllWindows(); // Cierra todas las ventanas antes de abrir una nueva
    var folderElement = document.getElementById(folderId);
    folderElement.style.display = 'block';
    centerWindow(folderElement); // Centra la ventana cuando se abre
}

// Función para regresar a la ventana "Mis Documentos"
function backToDocuments(folderId) {
    closeWindow(folderId); // Cierra la ventana actual
    openDocumentsWindow(); // Abre "Mis Documentos"
}

// Función para cerrar todas las ventanas
function closeAllWindows() {
    closeWindow('myDocuments');
    closeWindow('scriptsFolder');
    closeWindow('hackTheBoxFolder');
    closeWindow('bugBountyFolder');
    closeWindow('imagenesFolder');
    closeWindow('aboutMe');
    closeWindow('readme');
}

// Función para redimensionar la ventana
function resizeWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    var currentWidth = parseInt(windowElement.style.width);
    var currentHeight = parseInt(windowElement.style.height);

    // Alternar entre dos tamaños
    if (currentWidth === 500) { // Si está en tamaño grande
        windowElement.style.width = "150px"; // Tamaño pequeño
        windowElement.style.height = "150px"; // Tamaño pequeño
    } else {
        windowElement.style.width = "500px"; // Tamaño grande
        windowElement.style.height = "400px"; // Tamaño grande
    }

    centerWindow(windowElement); // Re-centra la ventana después de redimensionar
}

// Inicializar la ventana de "Mis Documentos" al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    openDocumentsWindow(); // Abre "Mis Documentos" al cargar la página
});
