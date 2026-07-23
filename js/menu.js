function validarDatos (){
let buscarPlato = document.getElementById("buscarPlato").value;


  if (buscarPlato === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar el nombre de un plato o bebida para realizar la búsqueda."
    });
    return;
  }
}

document.getElementById("guardarmenu").addEventListener("submit", (e) => {
    e.preventDefault();
    validarDatos();
});
