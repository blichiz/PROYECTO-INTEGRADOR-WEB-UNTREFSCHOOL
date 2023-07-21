const form = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  if (validarNombre(nombre) && validarEmail(email) && validarTelefono(telefono)) {
    resultadoDiv.innerHTML = '<p>Formulario enviado correctamente.</p>';
    form.reset();
  } else {
    resultadoDiv.innerHTML = '<p>Por favor, ingrese datos válidos.</p>';
  }
});

function validarNombre(nombre) {
  const nombreRegex = /^[a-zA-Z\s]+$/;
  return nombreRegex.test(nombre);
}

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validarTelefono(telefono) {
  const telefonoRegex = /^\d{7,15}$/;
  return telefonoRegex.test(telefono);
}
