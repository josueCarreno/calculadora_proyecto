document.querySelectorAll('.boton').forEach(boton => {
        boton.addEventListener('click', function() {
          document.calculadora.entrada.value  += this.value;
        });
    });

document.getElementById('resultado').addEventListener('click', function() {
  let nuevoValor = document.calculadora.entrada.value.replaceAll("x", "*");
  nuevoValor = nuevoValor.replaceAll("^", "**");
  nuevoValor = nuevoValor.replaceAll("÷", "/");
  //resultado = eval(nuevoValor);

  try {
    let regexOperation = /[+\-*/%.0-9()]/g;
    if (!regexOperation.test(nuevoValor)) {
      throw new Error("Operación inválida");
    }
    const resultado = eval(nuevoValor);
    if (resultado === Infinity || resultado === -Infinity) {
      nuevoValor = "";
      throw new Error("División entre Cero");
    }
    document.calculadora.entrada.value = resultado;
  } catch (error) {
    alert("Error en la calculación: " + error.message);
    document.calculadora.reset();
  }

});

document.getElementById('borrar').addEventListener('click', function() {
  eliminarUltimoNumero = document.calculadora.entrada.value.slice(0, -1);;

  document.calculadora.entrada.value = eliminarUltimoNumero;
});