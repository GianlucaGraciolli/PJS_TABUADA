const botaoDisparaTabuadaConsole = document.querySelector
    ('.btn-console');
const botaoDisparaTabuadaDOM = document.querySelector
    ('.btn-DOM')

const caixaEntradaTabuada = document.querySelector('#tabuada-number')

botaoDisparaTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoConsole(entradaUsuario);
});
botaoDisparaTabuadaDOM.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoDOM(entradaUsuario);
});

//verficiando se o enter foi apertado, caso sim, verifica a entrada e executa as entradas
// caixaEntradaTabuada.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         console.log(e,key);
//         validaEntrada(caixaEntradaTabuada.value);
//         mostrarTabuadaNoConsole(caixaEntradaTabuada.value);
//         mostrarTabuadaNoDOM(caixaEntradaTabuada.value);
//     }
// })

caixaEntradaTabuada.addEventListener('keyup', verTecla);
//associando uma variável a um elemento e adicionando um evento,
//teremos disponíveis os dados do evento em si e os dados do elemento.

function verTecla(e) {
    if (e.key === 'Enter') {
        validaEntrada(this.value);
        mostrarTabuadaNoConsole(this.value);
        mostrarTabuadaNoDOM(this.value);
    }
}


function validaEntrada(numero) {
    if (isNaN(numero)) {
        return "Número inválido! Digite um número válido";
    }
}

function mostrarTabuadaNoConsole(numero) {
    if (validaEntrada(numero) == null) {
        console.log(`Mostrando a tabuada do ${numero}`);
        let contador = 0;
        while (contador <= 10) {
            console.log(`${numero} X ${contador} = ${numero * contador}`);
            contador++;
        }
        return
    }
    console.log(validaEntrada(numero));
}


function mostrarTabuadaNoDOM(numero) {
    const ulTabuada = document.querySelector('.tabuada');
    ulTabuada.innerHTML = "";
    const tituloTabuada = document.querySelector('.titulo-tabuada');

    if (validaEntrada(numero) == null) {
        tituloTabuada.innerHTML = `Mostrando a tabuada do ${numero}`;
        let contador = 0;
        while (contador <= 10) {
            const linhaTabuada = document.createElement('li');
            linhaTabuada.innerHTML = `${numero} X ${contador} = ${numero * contador}`;
            contador++;
            linhaTabuada.classList.add('linha-tabuada');
            ulTabuada.appendChild(linhaTabuada);
        }
        return
    }
    tituloTabuada.innerHTML = validaEntrada(numero);
}

