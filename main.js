let teclas = document.querySelectorAll('.tecla');

function apagarDIsplay () {
    document.querySelector('.display').innerHTML = '';
}

for (contador = 0; contador < teclas.length; contador++) {
    let tecla = teclas[contador];
    let display = document.querySelector('.display');
    tecla.onclick = function () {
        if (tecla.value === 'C') {
            apagarDIsplay();
        }
        else {
            if (tecla.value === '='){
                let valores = document.querySelectorAll('.marked');
                let total = '';
                valores.forEach(function(elemento) {
                    total += elemento.textContent;
                });
                let resultado =  math.evaluate(total);
                apagarDIsplay();
                if (Number.isInteger(resultado)) {
                    display.innerHTML += `<h1 class='marked'>${resultado}</h1>`;
                } 
                else {
                    display.innerHTML += `<h1 class='marked'>${resultado.toFixed(2)}</h1>`;
                }
                total = '';
            }
            else {
                display.innerHTML += `<h1 class='marked'>${tecla.value}</h1>`;
            }
        }
    }
}
