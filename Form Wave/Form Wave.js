document.addEventListener('DOMContentLoaded', () => {
    const inputControls = document.querySelectorAll('.input-control');

    inputControls.forEach(control => {
        const input = control.querySelector('input');
        const spans = control.querySelectorAll('label span');

        // Aplica animación a cada letra del label cuando se hace clic en el input
        input.addEventListener('click', () => {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.style.transform = 'translateY(-30px)'; // Anima hacia arriba
                    span.style.color = 'rgba(255, 255, 255, 0.7)'; // Cambia el color al subir
                }, index * 20); // Ajusta la velocidad del retraso
            });
        });

        // Restablece la posición de las letras si el input pierde el foco y está vacío
        input.addEventListener('blur', () => {
            if (input.value === '') {
                spans.forEach(span => {
                    span.style.transform = 'translateY(0)'; // Regresa la posición original
                    span.style.color = ''; // Resetea el color si es necesario
                });
            }
        });
    });
});
