function handleCommand(command) {

const wordlist = {...commands, ...interactions}

let response = 'Desculpe! ainda não aprendi essa...';


    for (const question in wordlist) {
        if (command.includes(mask(question))) {
            response = wordlist[question];
            break;
        }
    }


    speakText(response);
}