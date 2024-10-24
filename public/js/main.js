const validar_usuario = () => {
    let email = document.getElementById('email-id').value;
    let pass = document.getElementById('pass-id').value;
    let data = new FormData();
    data.append("email", email); 
    data.append("pass", pass);
    fetch("app/controller/login.php", {
        method: "POST",
        body: data
    }).then(respuesta => respuesta.json())
    .then(async respuesta => {
        if (respuesta[0] == 1) {
            await Swal.fire({
                icon: "success",
                title: `${respuesta[1]}`,
                timer: 1000, 
                showConfirmButton: false 
            });
            window.location = "index.php";
        } else {
            Swal.fire({
                icon: "error",
                title: `${respuesta[1]}`,
                timer: 1000, 
                showConfirmButton: false 
            });
        }
    });
}

const registrar_usuario = () => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let data = new FormData();
    data.append("nombre", nombre); 
    data.append("apellido", apellido); 
    data.append("email", email);
    data.append("pass", pass); 
    fetch("app/controller/registro.php", {
        method: "POST",
        body: data
    }).then(respuesta => respuesta.json())
    .then(async respuesta => {
        if (respuesta[0] == 1) {
            await Swal.fire({
                icon: "success",
                title: `${respuesta[1]}`,
                timer: 1000, 
                showConfirmButton: false 
            });
            window.location = "login.php";
        } else {
            Swal.fire({
                icon: "error",
                title: `${respuesta[1]}`,
                timer: 1000, 
                showConfirmButton: false 
            });
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('btn-saludar')) {
        document.getElementById('btn-saludar').addEventListener('click', () => {
            validar_usuario();
        });
    }
    if (document.getElementById('btn-registrar')) {
        document.getElementById('btn-registrar').addEventListener('click', () => {
            registrar_usuario();
        });
    }
});
