let buscadorModulos = document.getElementById("buscadorModulos").value;

function validarDatos(buscadorModulos) {
  if (buscadorModulos === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar el nombre de un módulo para buscar."
    });
  }
}
