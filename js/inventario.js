let codigo = document.getElementById("codigo").value;
let nombre = document.getElementById("nombre").value;
let cantidad = document.getElementById("cantidad").value;
let marca = document.getElementById("marca").value; 
let precio = document.getElementById("precio").value;

function validarDatos(codigo, nombre, cantidad, marca, precio) {
  if (
    codigo === "" ||
    nombre === "" ||
    cantidad === "" ||
    marca === "" ||
    precio === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos son obligatorios y no pueden estar vacíos."
    });
  } else {
    if (isNaN(cantidad)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La cantidad del producto debe ser un número válido."
      });
    }

    if (isNaN(precio)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El precio del producto debe ser un número válido."
      });
    }

    if (!/^[a-zA-Z\s]+$/(nombre)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre del producto solo debe contener letras y espacios."
      });
    }

    if (!/^[a-zA-Z\s]+$/(marca)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La marca del producto solo debe contener letras y espacios."
      });
    }
  }
}
