document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContacto");

    form.addEventListener("submit", function (event) {
        let valid = true;

        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        if (nombre.value.trim() === "") {
            alert("Por favor, ingrese su nombre.");
            valid = false;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            valid = false;
        }
<<<<<<< HEAD

=======
        if (mensaje.value.trim() === "") {
            alert("Por favor, ingrese un mensaje.");
            valid = false;
        }
        
>>>>>>> hotfix-js
        if (mensaje.value.trim().length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            valid = false;
        }
<<<<<<< HEAD



=======
        
>>>>>>> hotfix-js
        if (!valid) {
            event.preventDefault();
        }
    });
});
