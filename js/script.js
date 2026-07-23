function validarDatos (){
let buscadorModulos = document.getElementById("buscadorModulos").value;

 
  if (buscadorModulos === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar el nombre de un módulo para buscar."
    });
    return;
  }
}
