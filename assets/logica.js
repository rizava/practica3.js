function resultado() {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let identidad = document.getElementById("identificacion").value;
  let sangre = document.getElementById("sangre").value;
  let genero = document.getElementById("genero").value;
  let edad = document.getElementById("edad").value;
  let celular = document.getElementById("celular").value;
  let celularSos = document.getElementById("celularSos").value;
  let diasemana = document.getElementById("diasemana").value;

  validar(
    nombre,
    apellidos,
    identificacion,
    sangre,
    genero,
    edad,
    celular,
    celularSos,
    diasemana
  );
  validarEdad(edad);
  validarMujer(dia, genero);
  validarHombre(dia, genero);
}

function validar(
  nombre,
  apellidos,
  identificacion,
  sangre,
  genero,
  edad,
  celular,
  celularSos,
  diasemana
) {
  if (
    !nombre ||
    !apellidos ||
    !identificacion ||
    !sangre ||
    !genero ||
    !edad ||
    !celular ||
    !celularSos ||
    !diasemana
  ) {
    alert("Todos los campos son obligatorios");
  }
}

function validarEdad(edad) {
  if (edad < 18) {
    alert("La edad mínima para ingresar es de 18 años");
  }
}

function validarMujer(dia, genero) {
  let hoy = new Date();
  if (hoy.getDay() == 4 && genero == "Femenino") {
    alert("Ingreso permitido solo para mujeres");
  }
}

function validarHombre(dia, genero) {
  let hoy = new Date();

  if (hoy.getDay() == 5 && genero == "Masculino") {
    alert("Ingreso permitido solo para hombres");
  }
}
