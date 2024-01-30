let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignacionDeTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById (`valorUsuario`).value);

    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignacionDeTexto(`p`,`Acertaste en ${intentos} ${(intentos === 1) ? `oportunidad`: `oportunidades`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignacionDeTexto(`p`,`el numero es menor`)
        } else {
            asignacionDeTexto(`p`,`El numero es mayor`)
        }
        intentos++;
        limpiarCaja();
    }

    return;
}
function limpiarCaja() {
    document.querySelector (`#valorUsuario`).value = ` `;
}
function brandon() {
    let numeroGen = Math.floor(Math.random()*numeroMax)+1;

    if (listaNumerosSorteados.length == numeroMax) {
        asignacionDeTexto(`P`,`Ya se sortearon todos los numeros`);
    } else{

    console.log(numeroGen);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.includes(numeroGen)) {
        return brandon();
    } else{
        listaNumerosSorteados.push(numeroGen);
        return numeroGen;
    }
}
}

function condicionesIniciales() {
    asignacionDeTexto(`h1`,"Juego del codigo secreto");
    asignacionDeTexto(`P`,`Dame un numero del 1 al ${numeroMax}`);
    numeroSecreto = brandon();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, `true`);

}
condicionesIniciales();
