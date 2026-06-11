let filtroContabilidad = document.getElementById("filtroContabilidad").value;
let ventas = document.getElementById("ventas").value;
let fechas = document.getElementById("fechas").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;

function validarDatos(ventas, fechas, ingresos, egresos, concepto, valor) {
  if (
    ventas === "" ||
    fechas === "" ||
    ingresos === "" ||
    egresos === "" ||
    concepto === "" ||
    valor === ""
  ) {
    console.log("Los datos son Incorrectos");
  } else {
    if (isNaN(ingresos)) {
      console.log("Los datos son Incorrectos");
    }

    if (isNaN(egresos)) {
      console.log("Los datos son Incorrectos");
    }

    if (isNaN(valor)) {
      console.log("Los datos son Incorrectos");
    }

    if (!/^[a-zA-Z\s]+$/.test(concepto)) {
      console.log("Los datos son Incorrectos");
    }
  }
}