function verificaChute () {

    const numero = + chute;

    if (chuteInvalido(numero)) {

       elementoChute.innerHTML += '<div>Valor Inválido</div>'
       return
        
    }

    if (numeroForMaiorOuMenorPermitido(numero)) {

        elementoChute.innerHTML += '<div>Valor inválido: o número secreto precisa estar entre' + menorValor + 'e ' + maiorValor + '</div>';
        return

    }

    if (numero === numeroSecreto) {


        document.body.innerHTML = `
        
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        
        `

    } else if (numero > numeroSecreto) {

        elementoChute.innerHTML += `
        
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>

        `;

    } else {

        elementoChute.innerHTML += `
        
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>

        `;

    }

}

function chuteInvalido(numero) {

    return Number.isNaN(numero);

}

function numeroForMaiorOuMenorPermitido(numero) {

    return numero > maiorValor || numero < menorValor;

}

document.body.addEventListener('click', e => {
    
    if (e.target.id == 'jogar-novamente') {

        window.location.reload;

    }

});
