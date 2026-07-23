function validarDatos() {
  
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let numeroDocumento = document.getElementById("numeroDocumento").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let generoMasculino = document.querySelector('input[name="g"]#generoMasculino')?.checked || false;
let generoFemenino = document.querySelector('input[name="g"]#generoFemenino')?.checked || false;
let fechaNacimiento = document.getElementById("fechaNacimiento").value;
let cargo = document.getElementById("cargo").value;
let contrasena = document.getElementById("contrasena").value;
 
  if (
    nombre === "" ||
    apellido === "" ||
    numeroDocumento === "" ||
    telefono === "" ||
    correo === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos son obligatorios y no pueden estar vacíos."
    });
    return;
  } else {
    if (!/^[a-zA-Z]+$/.test(nombre)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre solo debe contener letras."
      });
      return;
    }

    if (!/^[a-zA-Z]+$/.test(apellido)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El apellido solo debe contener letras."
      });
      return;
    }

    if (!/^\d+$/.test(numeroDocumento)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El número de documento debe ser un número válido."
      });
      return;
    }

    if (!/^\d+$/.test(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El teléfono debe ser un número válido."
      });
      return;
    }

    if (telefono.length > 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El teléfono no puede tener más de 10 dígitos."
      });
      return;
    }

    if (!correo.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo electrónico no es válido (debe incluir '@')."
      });
      return;
    }
  }
}

document.getElementById("registrousuario").addEventListener("submit", (e) => {
    e.preventDefault();
    validarDatos();
});