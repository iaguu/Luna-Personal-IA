function handleCommand(command) {

// Resposta padrão.

let response = 'Desculpe! ainda não aprendi essa...';

// Sessão de Interação Social

for (const question in interactions) {
    if (command.includes(mask(question))) {
        response = interactions[question];
        break;
    }
}

// Sessão de Comandos Simples

for (const question in simpleCommands) {
    if (command.includes(mask(question))) {
        response = simpleCommands[question];
        break;
    }
}


// Sessão de Comandos Avançados

for (const question in advancedCommands.mathOperations) {

    if (command.includes(mask(question))) {

        let operator = advancedCommands.mathOperations[question]
        response = calcular(mask(command), operator);

        break;
    }
}

    speakText(response);

}