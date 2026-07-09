let inputEmail = document.getElementById('inputEmail').value;

function validarDatos(inputEmail) {
  if (inputEmail === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar un correo electrónico para suscribirte."
    });
  } else {
    if (!inputEmail.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo electrónico ingresado no es válido."
      });
    }
  }
}
