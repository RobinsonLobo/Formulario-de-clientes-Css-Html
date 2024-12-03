const form = document.querySelector('form'); // Selecciona el formulario

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que la página se recargue
    alert('¡Formulario enviado correctamente!'); // Muestra el mensaje
    form.reset(); // Opcional: limpia el formulario después del envío
});
