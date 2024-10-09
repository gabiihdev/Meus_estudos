let passoDesejado = parseInt(prompt("Digite o número que deseja ver as informações (1 a 10):"));

if (passoDesejado < 1 || passoDesejado > 10 || isNaN(passoDesejado)) {
    console.log("Número de passo inválido.");
} else {
    switch (passoDesejado) {
        case 1:
            console.log("Passo 1: Pegue os grãos de café.");
        case 2:
            console.log("Passo 2: Coloque os grãos na máquina de café para torrá-los.");
        case 3:
            console.log("Passo 3: Aguarde até que os grãos estejam torrados.");
        case 4:
            console.log("Passo 4: Retire os grãos torrados da máquina.");
        case 5:
            console.log("Passo 5: Moa os grãos torrados usando a máquina de moer café.");
        case 6:
            console.log("Passo 6: Coloque o pó de café moído no filtro da cafeteira.");
        case 7:
            console.log("Passo 7: Encha o reservatório da cafeteira com água limpa.");
        case 8:
            console.log("Passo 8: Ligue a cafeteira e aguarde até que o café seja preparado.");
        case 9:
            console.log("Passo 9: Desligue a cafeteira e retire o café pronto.");
        case 10:
            console.log("Passo 10: Sirva o café em uma xícara e aproveite!");
            break;
        default:
            console.log("Número de passo inválido.");
            break;
    }
}