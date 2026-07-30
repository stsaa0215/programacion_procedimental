function validarDatos (){
let nombreUsuario = document.getElementById("nombreUsuario").value;
let telefono = document.getElementById("telefono").value;
let direccion = document.getElementById("direccion").value;
let cantidad = document.getElementById("cantidad").value;


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
    return;
  } else {
    if (!/^\d+$/.test(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El número telefónico ingresado no es válido."
      });
      return;
    }

    if (!/^\d+$/.test(cantidad)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La cantidad del pedido debe ser un número válido."
      });
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombreUsuario)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre del usuario solo debe contener letras y espacios."
      });
      return;
    }
  }
}

document.getElementById("guardarpedido").addEventListener("submit", (e) => {
    e.preventDefault();
    validarDatos();
});