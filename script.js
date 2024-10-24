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
        var newWidth = e.clientX - windowElement.getBoundingClientRect().left;
        var newHeight = e.clientY - windowElement.getBoundingClientRect().top;

        // Aplicar límites de tamaño
        if (newWidth > 150 && newHeight > 100) { // Tope de tamaño
            windowElement.style.width = newWidth + "px";
            windowElement.style.height = newHeight + "px";
        }
    }

    function stopResize() {
        document.onmouseup = null;
        document.onmousemove = null;
        windowElement.style.transition = "all 0.2s"; // Reactiva la transición
    }
}

// Función para abrir una carpeta
function openFolder(folderId) {
    var content = '';
    if (folderId === 'scriptsFolder') {
        content = `
            <div class="icon" onclick="viewScript('script1.py')">
                <img src="icons/blank.gif" alt="Script 1">
                <p>script1.py</p>
            </div>
            <div class="icon" onclick="viewScript('script2.py')">
                <img src="icons/blank.gif" alt="Script 2">
                <p>script2.py</p>
            </div>
            <div class="icon" onclick="viewScript('script3.py')">
                <img src="icons/blank.gif" alt="Script 3">
                <p>script3.py</p>
            </div>
        `;
    } else if (folderId === 'hackTheBoxFolder') {
        content = `
            <div class="icon">
                <img src="icons/blank.gif" alt="PDF 1">
                <p>document1.pdf</p>
            </div>
            <div class="icon">
                <img src="icons/blank.gif" alt="PDF 2">
                <p>document2.pdf</p>
            </div>
            <div class="icon">
                <img src="icons/blank.gif" alt="PDF 3">
                <p>document3.pdf</p>
            </div>
            <div class="icon">
                <img src="icons/blank.gif" alt="PDF 4">
                <p>document4.pdf</p>
            </div>
        `;
    } else if (folderId === 'bugBountyFolder') {
        content = `
            <div class="icon">
                <img src="icons/blank.gif" alt="PDF 1">
                <p>document1.pdf</p>
            </div>
            <div class="icon">
                <img src="icons/blank.gif" alt="PDF 2">
                <p>document2.pdf</p>
            </div>
            <div class="icon">
                <img src="icons/blank.gif" alt="PDF 3">
                <p>document3.pdf</p>
            </div>
        `;
    }

    var windowElement = document.getElementById('myDocuments');
    var contentElement = document.getElementById('myDocumentsContent');
    contentElement.innerHTML = content;
}

// Función para cerrar una carpeta y volver
function closeFolder(folderId) {
    var windowElement = document.getElementById(folderId);
    var myDocumentsContent = document.getElementById('myDocumentsContent');
    myDocumentsContent.innerHTML = `
        <div class="icon" onclick="openFolder('scriptsFolder')">
            <img src="icons/folder.gif" alt="Scripts">
            <p>Scripts</p>
        </div>
        <div class="icon" onclick="openFolder('hackTheBoxFolder')">
            <img src="icons/folder.gif" alt="Hack The Box">
            <p>Hack The Box</p>
        </div>
        <div class="icon" onclick="openFolder('bugBountyFolder')">
            <img src="icons/folder.gif" alt="Bug Bounty">
            <p>Bug Bounty</p>
        </div>
    `;
}

// Hacer todas las ventanas movibles y redimensionables
document.addEventListener("DOMContentLoaded", function() {
    makeDraggable(document.getElementById('myDocuments'));
    makeDraggable(document.getElementById('aboutMe'));
    makeDraggable(document.getElementById('readme'));
    makeDraggable(document.getElementById('scriptsFolder'));
    makeDraggable(document.getElementById('hackTheBoxFolder'));
    makeDraggable(document.getElementById('bugBountyFolder'));
});
