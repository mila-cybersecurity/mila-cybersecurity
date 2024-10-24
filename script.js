// Script para abrir enlaces en una ventana centrada
function openCenteredWindow(url) {
    const width = 800; // Ancho de la ventana
    const height = 600; // Alto de la ventana
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);
    
    window.open(url, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
}

// Ejemplo de uso: llama a esta función al hacer clic en un enlace
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        openCenteredWindow(this.href);
    });
});
