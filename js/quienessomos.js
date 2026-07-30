function validarDatos (){
let inputEmail = document.getElementById('inputEmail').value;


  if (inputEmail === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar un correo electrónico para suscribirte."
    });
    return;
  } else {
    if (!inputEmail.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo electrónico ingresado no es válido."
      });
      return;
    }
  }
}

document.getElementById("guardarinfo").addEventListener("submit", (e) => {
    e.preventDefault();
    validarDatos();
});