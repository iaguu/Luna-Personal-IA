const checkWakeWord = (transcript) => {

    const wakeWords = [
        'luna',
        'olá luna',
        'hey luna',
        'ei luna'
    ];


    for (const word of wakeWords) {
        if (transcript.includes(word)) {

            handleCommand(mask(transcript));

            console.log('Palavra de ativação detectada.');
            break;
        }
    }

}
