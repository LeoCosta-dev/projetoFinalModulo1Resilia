function processamento (a, proximaFase, gameOver){
    while(true){
        var escolha = Number(prompt("Qual opção você escolheu?"))
        if ([1,2,3,4].includes(escolha)){
            if (escolha === a){
                location.replace(proximaFase)
            }else{
                location.replace(gameOver)
            }
        }
        return
    }
}

function inicio(batman, mulherMaravilha, superMan){
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
        return
    }
}
