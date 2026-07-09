let buscarPlato = document.getElementById("buscarPlato").value;

function validarDatos(buscarPlato) {
  if (buscarPlato === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar el nombre de un plato o bebida para realizar la búsqueda."
    });
  }
}
