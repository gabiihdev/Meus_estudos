let X = parseInt(prompt("Digite o valor de X (inteiro e positivo):"));
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));;
let C = parseFloat(prompt("Digite o valor de C:"));

if (isNaN(X) || X <= 0 || !Number.isInteger(X)) {
    console.log("O valor de X deve ser inteiro e positivo.");
} else {
    console.log("X = " + X);
    console.log("A = " + A);
    console.log("B = " + B);
    console.log("C = " + C);

    if (X === 1) {
        var valores = [A, B, C]
        valores.sort(function (a, b) {
            return a - b;
        });

        console.log("Valores em ordem crescente:");
        console.log("A = " + valores[0]);
        console.log("B = " + valores[1]);
        console.log("C = " + valores[2]);

    } else if (X === 2) {
        var valores = [A, B, C]
        valores.sort(function (a, b) {
            return b - a;
        });

        console.log("Valores em ordem decrescente:");
        console.log("A = " + valores[0]);
        console.log("B = " + valores[1]);
        console.log("C = " + valores[2]);

    } else if (X === 3) {
        var valores = [A, B, C]
        valores.sort(function (a, b) {
            return b - a;
        });

        console.log("Valores com o maior valor entre os dois:");
        console.log("A = " + valores[0]);
        console.log("B = " + valores[1]);
        console.log("C = " + valores[2]);
    } else {
        console.log("X não é nenhum dos valores esperados (1,2,3).");
    }
}