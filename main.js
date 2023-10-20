
function validarFormulario(){
  
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;

  /* if (nombre === "") {
    alert("Por favor, ingresa tu nombre.");
    return false;
  } */

  if(nombreUsuario === "" || nombreUsuario === null || nombreUsuario.lenght === 0)
    {alert("Error: debe llenar este campo");
    nombreUsuario.focus();
    return false; }





  if (apellido === "") {
    alert("Por favor, ingresa tu nombre.");
    return false;
  }
  if (email === "") {
    alert("Por favor, ingresa tu correo electrónico.");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return false;
  }

  return true;
} 