const listArgs = process.argv.slice(2);

console.log('-------------------- Executando um FOR OF--------------------');
let controllerForOf = 0; //opcional
for (const args of listArgs) {
    console.log(`Posição: ${controllerForOf} -> Valor lido: ${args}`);
    controllerForOf++; //opcional
}

console.log('\n-------------------- Executando um FOR --------------------');
for (let controllerFor = 0; controllerFor < listArgs.length; controllerFor++) {
    console.log(`Posição: ${controllerFor} -> Valor lido: ${listArgs[controllerFor]}`);
}

console.log('\n-------------------- Executando um WHILE --------------------');
let controllerWhile = 0;
while (controllerWhile < listArgs.length) {
    console.log(`Posição: ${controllerWhile} -> Valor lido: ${listArgs[controllerWhile]}`);
    controllerWhile++;
}

console.log('\n-------------------- Executando um DO WHILE --------------------');
let controllerDoWhile = 0;
do {
    console.log(`Posição: ${controllerDoWhile} -> Valor lido: ${listArgs[controllerDoWhile]}`);
    controllerDoWhile++;
} while (controllerDoWhile < listArgs.length)