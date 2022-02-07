document.getElementById("nombre").value;
document.getElementById("apellido").value;
document.getElementById("documento").value;
document.getElementById("rh").value;
document.getElementById("genero").value;
document.getElementById("edad").value;
document.getElementById("celular").value;
document.getElementById("celularSos").value;

let  recogido={nombre,apellido,documento,rh,genero,edad,celular,celularSos};





function validacion(){
  if (!documento || !nombre ||  !apellido ||  !rh ||  !genero ||   !edad || !celular || !celularSos || !dia)
    {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
    }
  else if (edad > 18) {
    // Si no se cumple la condicion...
    alert(`El ingreso no es valido no es mayor de 18 años.`);
    return false;
  }
  
  else if (genero == "femenino" && dia == "jueves") {
    // Si no se cumple la condicion...
    alert(`El ingreso no valido hoy es noche de chicos.`);
    return false;
  }
  if (genero == "masculino" && dia == "viernes") {
    alert(`El ingreso no valido hoy es noche de chicas.`);
    return false;
  } else {`Bienvenid0 puede ingresar.`};

  return true;





}