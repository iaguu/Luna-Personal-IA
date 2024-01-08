const checkWakeWord = (transcript) => {

    const wakeWords = [
        'luna',
        "luma",
        'yuna',
        'bruna'
    ];


    for (const word of wakeWords) {
        if (transcript.includes(mask(word))) {
            handleCommand(mask(transcript));
            break;
        }       
    }

}
