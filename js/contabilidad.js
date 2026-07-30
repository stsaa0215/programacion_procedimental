function validarDatos (){
let filtroContabilidad = document.getElementById("filtroContabilidad").value;
let ventas = document.getElementById("ventas").value;
let fechas = document.getElementById("fechas").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;


  if (
    ventas === "" ||
    fechas === "" ||
    ingresos === "" ||
    egresos === "" ||
    concepto === "" ||
    valor === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos son obligatorios y no pueden estar vacíos."
    });
    return;
  } else {
    if (!/^\d+(\.\d+)?$/.test(ingresos)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El valor de los ingresos debe ser un número válido."
      });
      return;
    }

    if (!/^\d+(\.\d+)?$/.test(egresos)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El valor de los egresos debe ser un número válido."
      });
      return;
    }

    if (!/^\d+(\.\d+)?$/.test(valor)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El valor total debe ser un número válido."
      });
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(concepto)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El concepto solo debe contener letras y espacios."
      });
      return;
    }
  }
}

document.getElementById("guardarcontabilidad").addEventListener("submit", (e) => {
    e.preventDefault();
    validarDatos();
});