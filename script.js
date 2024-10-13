document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aquí puedes agregar lógica para enviar el comentario a un servidor
    document.getElementById('response').innerHTML = `
        <p>Gracias por tu comentario, ${name}. Nos pondremos en contacto contigo en ${email} si es necesario.</p>
    `;

    document.getElementById('commentForm').reset();
});
