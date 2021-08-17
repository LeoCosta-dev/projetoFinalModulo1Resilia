function processamento (a, b, proximaFase, gameOver){
    while(true){
        var escolha = Number(prompt("Qual opção você escolheu?"))
        if ([1,2,3,4,5].includes(escolha)){
            if (escolha === a || escolha === b){
                location.replace(proximaFase)
            }else{
                location.replace(gameOver)
            }
        }
    }
    return
}

function Inicio(batman, mulherMaravilha, superMan){
    while(true){
        var escolha = Number(prompt("Qual opção você escolheu?"))
        if ([1,2,3].includes(escolha)){
            if (escolha === 1){
                location.replace(batman)
            }
            if (escolha === 2){
                location.replace(mulherMaravilha)
            }
            if (escolha == 3){
                location.replace(superMan)
            }
        }
    }
    return
}


function trapaça(batman, mulherMaravilha, superMan, gameOver){
    while(true){
        var escolha = Number(prompt("Qual opção você escolheu?"))
        if ([1,2,3,4].includes(escolha)){
            if (escolha === 1){
                location.replace(batman)
            }else if (escolha === 2){
                location.replace(mulherMaravilha)
            }else if (escolha === 3){
                location.replace(superMan)
            }else{
                location.replace(gameOver)
            }
        }
    }
    return
}