const form = document.getElementById("formulario");
const formNombre = document.getElementById("nombre");
const formEmail = document.getElementById("email");
const formPassword = document.getElementById("password");
const formSubmit = document.getElementById("enviar");

function eliminarAlertas() {
  const siguienteNombre = formNombre.nextElementSibling;
  if (siguienteNombre && siguienteNombre.tagName === "P") {
    siguienteNombre.remove();
  }
  const siguienteEmail = formEmail.nextElementSibling;
  if (siguienteEmail && siguienteEmail.tagName === "P") {
    siguienteEmail.remove();
  } 
  const siguientePassword = formPassword.nextElementSibling;
  if (siguientePassword && siguientePassword.tagName === "P") {
    siguientePassword.remove();
  } 
}

formSubmit.addEventListener("click", (event) => {
  eliminarAlertas();
  if (!(formNombre.value != "" && formEmail.value.includes("@") && formPassword.value.length >= 8)) {
    event.preventDefault();
    if (formNombre.value == "") {
      const parrafo1 = document.createElement("p");
      parrafo1.style.display = "inline";
      parrafo1.style.color = "darkred";
      formNombre.insertAdjacentElement("afterend", parrafo1);
      formNombre.nextElementSibling.innerHTML = "El nombre no puede estar vacío"
    }
    if (!formEmail.value.includes("@")) {
      const parrafo2 = document.createElement("p");
      parrafo2.style.display = "inline";
      parrafo2.style.color = "darkred";
      formEmail.insertAdjacentElement("afterend", parrafo2);
      formEmail.nextElementSibling.innerHTML = "Correo electrónico inválido"
    }
    if (formPassword.value.length < 8) {
      const parrafo3 = document.createElement("p");
      parrafo3.style.display = "inline";
      parrafo3.style.color = "darkred";
      formPassword.insertAdjacentElement("afterend", parrafo3);
      formPassword.nextElementSibling.innerHTML = "La contraseña debe tener al menos 8 caracteres"
    }
  }
})
