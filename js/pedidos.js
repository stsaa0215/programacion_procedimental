let nombreUsuario = document.getElementById("nombreUsuario").value;
let telefono = document.getElementById("telefono").value;
let direccion = document.getElementById("direccion").value;
let cantidad = document.getElementById("cantidad").value;

function validarDatos(nombreUsuario, telefono, direccion, cantidad) {
  if (
    nombreUsuario === "" ||
    telefono === "" ||
    direccion === "" ||
    cantidad === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos son obligatorios para registrar el pedido."
    });
  } else {
    if (isNaN(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El número telefónico ingresado no es válido."
      });
    }

    if (isNaN(cantidad)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La cantidad del pedido debe ser un número válido."
      });
    }

    if (!/^[a-zA-Z\s]+$/(nombreUsuario)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre del usuario solo debe contener letras y espacios."
      });
    }
  }
}
