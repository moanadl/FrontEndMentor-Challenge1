// ---------- Creating constants ----------

const numRating = Array.from(document.querySelectorAll('.rating-numbers a'));
const submitButton = document.querySelector('button');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const finalEvaluation = document.querySelector('.thank-you-state h2 span');


function mouseOver () {

    if (this.style.backgroundColor !== 'rgb(251, 116, 19)') {
        this.style.backgroundColor = 'rgb(149, 158, 172)';
        this.style.color = 'rgb(255, 255, 255)';
    }

}

function mouseLeave () {

    if (this.style.backgroundColor !== 'rgb(251, 116, 19)') {
        this.style.backgroundColor = 'rgb(43, 53, 64)';
        this.style.color = 'rgb(149, 158, 172)';
    }

}


function selectNumber() {

    if (this.style.backgroundColor == 'rgb(251, 116, 19)') { // *

        for (let i = 0; i < numRating.length; i++) {
         numRating[i].style.backgroundColor = 'rgb(43, 53, 64)';
         numRating[i].style.color = 'rgb(149, 158, 172)';
        }

    } else {

        for (let i = 0; i < numRating.length; i++) {
         numRating[i].style.backgroundColor = 'rgb(43, 53, 64)';
         numRating[i].style.color = 'rgb(149, 158, 172)';
        }

        this.style.backgroundColor = 'rgb(251, 116, 19)';
        this.style.color = 'rgb(255, 255, 255)';

    }
}


function submitEvaluation () {

    let evaluationControl = 0;

    for (let i = 0; i < numRating.length; i++) {

        if  (numRating[i].style.backgroundColor == 'rgb(251, 116, 19)') {
            evaluationControl += 1;
            let numSelecionado = numRating[i].innerText;
            finalEvaluation.append(numSelecionado);
        }
    }

    if (evaluationControl == 1) {
                ratingState.style.display = 'none';
                thankYouState.style.display = 'flex';
    } else {
        alert('You need to select a number first :)');
    }

}


 numRating.forEach (e => {
    e.onclick = selectNumber;
    e.onmouseover = mouseOver;
    e.onmouseleave = mouseLeave;
})

submitButton.onclick = submitEvaluation;

// Onde parei:
// 1. Submeter no gitHub e no frontend mentor

// * Eu tentei fazer esse código usando o hsl. Mas deu problema no condicional porque o browser, por padrão converte o hsl para o rgb.
    // Então, quando entrava no condicional comparava o string do rgb com o do hsl e dava erro. Na dúvida, usar o rgb ou fazer o esquema
    // utilizar classes com as cores (ver resposta no stack overflow)