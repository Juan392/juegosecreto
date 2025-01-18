let numeroSecreto;
let intentos = 0;
let numerosSorteados = []
let numeroMaximo = 10
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificar(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    intentos ++;
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${intentos === 1 ? 'intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','Fallaste, el numero es menor');
        } else {
            asignarTextoElemento('p','Fallaste, el numero es mayor');
        }
        limpiarcaja()
    }
    return;
}

function limpiarcaja(){
    let valorcaja = document.querySelector(`#valorUsuario`).value = '';
}
function nuevoJuego(){
    //primero limpiar la caja
    limpiarcaja()
    //indicar mensaje de inicio
    //generar el numero aleatorio
    condiciones()
    //deshabilitar el boton de nuevo juego
    //inicializar el numero de intentos
    document.getElementById(`#reiniciar`).setAttribute('disabled','true');
}

function generarNumeroSecreto() {
    let = numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya se sortearon todos los numeros, mostrar un mensaje de juego terminado
    if(numerosSorteados,length() == numeroMaximo){
        alert('Juego terminado, se han dado todso los numeros posibles')
    }
    if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto()
    } else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
}

function condiciones(){
    asignarTextoElemento('h1','Numero Secreto');
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
}

condiciones()