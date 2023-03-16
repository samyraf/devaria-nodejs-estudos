const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('---- Este programa vai checar se você é maior de idade e se possui habilitação para poder entar no kart! ----');
console.log('---- Caso esteja tudo certo, iremos verificar se você está na lista de presença do horário. ---- ');

readLine.question('\nQual é o ano do seu nascimento? ', ano => {
    if (ano > 2005) {
        console.log('Você não possui 18 anos!');
    } else {
        readLine.question('\nVocê possui habilitação - (Sim/Nao)? ', temHabilitacao => {
            if (!(temHabilitacao.toUpperCase() === 'SIM')) {
                console.log('Você não tem permissão para entrar no kart!');
            } else {
                readLine.question('\nQual o seu nome? ', nome => {
                    switch (nome) {
                        case 'Lucas':
                            console.log('Bem-Vindo ao Kart, Lucas!');
                            break;
                        case 'Samyra':
                            console.log('Bem-Vindo ao Kart, Samyra!');
                            break;
                        default:
                            console.log('Você não está na lista de presença deste horário!');
                    }
                });
            }
        })
    }
}) 