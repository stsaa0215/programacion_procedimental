function validarDatos (){
let codigo = document.getElementById("codigo").value;
let nombre = document.getElementById("nombre").value;
let cantidad = document.getElementById("cantidad").value;
let marca = document.getElementById("marca").value; 
let precio = document.getElementById("precio").value;


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
    return;
  } else {
    if (!/^\d+$/.test(cantidad)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La cantidad del producto debe ser un número válido."
      });
      return;
    }

    if (!/^\d+(\.\d+)?$/.test(precio)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El precio del producto debe ser un número válido."
      });
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre del producto solo debe contener letras y espacios."
      });
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(marca)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La marca del producto solo debe contener letras y espacios."
      });
      return;
    }
  }
}

document.getElementById("guardarinventario").addEventListener("submit", (e) => {
    e.preventDefault();
    validarDatos();
});
