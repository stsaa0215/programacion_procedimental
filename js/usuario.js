let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let numeroDocumento = document.getElementById("numeroDocumento").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let generoMasculino = document.querySelector(
  'input[name="generoMasculino"]:checked',
).value;
let generoFemenino = document.querySelector(
  'input[name="generoFemenino"]:checked',
).value;
let fechaNacimiento = document.getElementById("fechaNacimiento").value;
let cargo = document.getElementById("cargo").value;
let contrasena = document.getElementById("contrasena").value;

function validarDatos(nombre, apellido, numeroDocumento, telefono, correo) {
  if (
    nombre === "" ||
    apellido === "" ||
    numeroDocumento === "" ||
    telefono === "" ||
    correo === ""
  ) {
    console.log("Los datos son Incorrectos");
  } else {
    if (!/^[a-zA-Z]+$/.test(nombre)) {
      console.log("Los datos son Incorrectos");
    }

    if (!/^[a-zA-Z]+$/.test(apellido)) {
      console.log("Los datos son Incorrectos");
    }

    if (isNaN(numeroDocumento)) {
      console.log("Los datos son Incorrectos");
    }

    if (isNaN(telefono)) {
      console.log("Los datos son Incorrectos");
    }

    if (telefono.length > 10) {
      console.log("Los datos son Incorrectos");
    }

    if (!correo.includes("@")) {
      console.log("Los datos son Incorrectos");
    }
  }
}
