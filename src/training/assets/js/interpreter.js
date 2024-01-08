function handleCommand(command) {

// Resposta padrão.

let response = false;

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

for (const question in advancedCommands.languageTraduction) {

    if (command.includes(mask(question))) {

        

        break;
    }
}

    if(response == false){
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.volume = 0.75;
        audioPlayer.play();
    }else{
        speakText(response);
    }

}