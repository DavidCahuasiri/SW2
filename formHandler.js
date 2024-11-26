document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message'); // Obtén el mensaje de confirmación

    // Asegúrate de que el evento se dispare al enviar el formulario
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Evitar la recarga de la página
        console.log("Formulario enviado");

        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log("Nombre:", name, "Email:", email, "Mensaje:", message);

        // Crear el mensaje para WhatsApp
        const whatsappMessage = `Hola, me llamo ${encodeURIComponent(name)}. Mi email es ${encodeURIComponent(email)}. Este es mi mensaje: ${encodeURIComponent(message)}`;
        const whatsappURL = `https://wa.me/59167750503?text=${whatsappMessage}`;
        console.log("URL de WhatsApp generada:", whatsappURL);

        // Mostrar mensaje de confirmación
        confirmationMessage.style.display = 'block'; // Mostrar el mensaje de confirmación

        // Abrir WhatsApp en nueva pestaña después de mostrar la confirmación
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 500); // Retraso para permitir que se vea el mensaje de confirmación

        // Reiniciar el formulario después de 3 segundos y ocultar el mensaje
        setTimeout(() => {
            contactForm.reset(); // Reiniciar el formulario
            confirmationMessage.style.display = 'none'; // Ocultar el mensaje de confirmación
        }, 3000); // 3 segundos de espera
    });
});
