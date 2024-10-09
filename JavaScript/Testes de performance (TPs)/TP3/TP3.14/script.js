let votosRoboRat = parseInt(prompt("Digite a quantidade de votos recebida pelo RoboRat:"));
let votosSuperKeyboard = parseInt(prompt("Digite a quantidade de votos recebida pelo SuperKeyboard:"));
let votosInvalidos = parseInt(prompt("Digite a quantidade de votos inválidos:"));
let totalVotosValidos = votosRoboRat + votosSuperKeyboard;

//
let percentualRoboRat = (votosRoboRat / (votosRoboRat + votosSuperKeyboard + votosInvalidos)) * 100;
let percentualSuperKeyboard = (votosSuperKeyboard / (votosRoboRat + votosSuperKeyboard + votosInvalidos)) * 100;
let percentualInvalidos = (votosInvalidos / (votosRoboRat + votosSuperKeyboard + votosInvalidos)) * 100;

//
let percentualRoboRatValidos = (votosRoboRat / totalVotosValidos) * 100;
let percentualSuperKeyboardValidos = (votosSuperKeyboard / totalVotosValidos) * 100;

//
console.log("Porcentagem de votos do RoboRat: " + percentualRoboRat.toFixed(2) + "%");
console.log("Porcentagem de votos do SuperKeyboard: " + percentualSuperKeyboard.toFixed(2) + "%");
console.log("Porcentagem de votos inválidos: " + percentualInvalidos.toFixed(2) + "%");

//
console.log("Porcentagem de votos do RoboRat (apenas votos válidos): " + percentualRoboRatValidos.toFixed(2) + "%");
console.log("Porcentagem de votos do SuperKeyboard (apenas votos válidos): " + percentualSuperKeyboardValidos.toFixed(2) + "%");

//
if (votosRoboRat > votosSuperKeyboard) {
    console.log("O novo mascote do time será o RoboRat.");
} else if (votosSuperKeyboard > votosRoboRat) {
    console.log("O novo mascote do time será o SuperKeyboard.");
} else {
    console.log("Os mascotes empataram. Não haverá mudança no mascote do time.");
}