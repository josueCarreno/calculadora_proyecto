document.querySelectorAll('.boton').forEach(boton => {
        boton.addEventListener('click', function() {
          
          let entrada = document.calculadora.entrada.value + this.value;
          let entrada_regex = /^[0-9]+$/;

          if(entrada_regex.test(entrada) ) {
            document.calculadora.entrada.value  += this.value;
          }
        
        });
    });

document.getElementById('resultado').addEventListener('click', function() {
  let nuevoValor = document.calculadora.entrada.value.replaceAll("x", "*");
  nuevoValor = nuevoValor.replaceAll("^", "**");
  resultado = eval(nuevoValor);
  
  document.calculadora.entrada.value = resultado
});

document.getElementById('borrar').addEventListener('click', function() {
  eliminarUltimoNumero = document.calculadora.entrada.value.slice(0, -1);;

  document.calculadora.entrada.value = eliminarUltimoNumero;
});