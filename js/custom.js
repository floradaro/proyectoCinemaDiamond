//expande el textarea una vez que se llega al limite de lineas mostradas del comentario
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.auto-expand');
    
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.max(this.scrollHeight, this.rows * 20) + 'px';
    });

    // Validaciones de formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // Aquí puedes agregar tus validaciones
        const textarea = form.querySelector('.auto-expand');
        
        if (textarea.value.trim() === '') {
            event.preventDefault(); // Evita enviar el formulario
            textarea.classList.add('is-invalid');
        } else {
            textarea.classList.remove('is-invalid');
        }
    });
});