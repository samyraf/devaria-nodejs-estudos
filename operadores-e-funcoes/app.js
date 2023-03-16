const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const operations = `
---- Nossa calculadora realiza as seguintes operações: ----
1 - SOMA (+)
2 - SUBTRAÇÃO (-)
3 - MULTIPLICAÇÃO (*)
4 - DIVISÃO (/)
5 - MOD, RESTO DE UMA DIVISÃO (%) 
---- Informe o número da operação desejada: ----
`;

let result = 0;

console.log('---- CALCULADORA ----');

readLine.question('\nInforme o primeiro número: ', numberOne => {
    readLine.question('Informe o segundo número: ', numberTwo => {
        numberOne = parseInt(numberOne);
        numberTwo = parseInt(numberTwo);

        readLine.question(`${operations}`, operations => {
            switch (parseInt(operations)) {
                case 1:
                    result = numberOne + numberTwo;
                    break;
                case 2:
                    result = numberOne - numberTwo;
                    break;
                case 3:
                    result = numberOne * numberTwo;
                    break;
                case 4:
                    result = numberOne / numberTwo;
                    break;
                case 5:
                    result = numberOne % numberTwo;
                    break;
                default:
                    console.log('Operação Inválida!');
            }
            return console.log(`\nO resultado da conta é: ${result}`);
        });
    });
});