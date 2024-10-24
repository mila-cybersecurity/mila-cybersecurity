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
    openWindow('myDocuments'); // Abre "Mis Documentos"
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
