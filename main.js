let teclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < teclas.length; contador++) {
    let tecla = teclas[contador];
    tecla.onclick = function () {
        document.querySelector('.display').innerHTML = `<h1 class='marked'>${'TESTE'}</h1>`;
    }
}