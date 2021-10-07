
let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;
let opcaoMenu = 5

function menu(opcaoMenu) {
    let menuEscolhido = parseInt(opcaoMenu)
    switch (menuEscolhido) {
    case 1:
        return pipoca
        break;
    case 2:
        return macarrao
        break;
    case 3:
        return carne
        break;
    case 4:
        return feijao
        break;
    case 5:
        return brigadeiro
        break
    default:
console.log("Não existe essa opcao. Escolha entre 1 e 5");
    }
}
   


function aumentarTempo(tempoModificado) {
    if (opcaoMenu > 0 && opcaoMenu < 6){
        tempoPadrao = menu(opcaoMenu)
        if (tempoModificado < tempoPadrao) {
                console.log("tempo insuficiente")
            }
            else if (tempoModificado > 3 * tempoPadrao) {
                console.log("kabumm")
            }
            else if (tempoModificado > 2 * tempoPadrao) {
                console.log("A comida queimou")
            }
        else {
            console.log("Prato pronto, bom apetite!!!")
        }
    }
    else{
        menu(opcaoMenu)
    }


}
console.log(aumentarTempo(5));







