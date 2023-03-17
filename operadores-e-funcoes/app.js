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

const validateInformedNumber = (number) => {
    const result = Number.parseFloat(number);

    if (!result) {
        console.log('O número informado não é válido!');
    }
    return result;
}
let result = 0;

console.log('---- CALCULADORA ----');

readLine.question('\nInforme o primeiro número: ', numberOne => {
    const numberOneValidated = validateInformedNumber(numberOne);

    if (numberOneValidated) {
        readLine.question('Informe o segundo número: ', numberTwo => {
            const numberTwoValidated = validateInformedNumber(numberTwo);

            if (numberTwoValidated) {
                readLine.question(`${operations}`, operations => {
                    switch (parseInt(operations)) {
                        case 1: result = numberOneValidated + numberTwoValidated;
                            break;
                        case 2: result = numberOneValidated - numberTwoValidated;
                            break;
                        case 3: result = numberOneValidated * numberTwoValidated;
                            break;
                        case 4: result = numberOneValidated / numberTwoValidated;
                            break;
                        case 5: result = numberOneValidated % numberTwoValidated;
                            break;
                        default:
                            console.log('Operação Inválida!');
                    }
                    return console.log(`\nO resultado da conta é: ${result}`);
                });
            }
        });
    }
});