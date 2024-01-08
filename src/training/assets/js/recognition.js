const synth = window.speechSynthesis;
let isListening = false;
let recognition = null;

function voiceListener() {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
        return;
    }

    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR';
    recognition.continuous = true;

    recognition.onstart = () => {
        console.log("Luna está ativa e ouvindo!");
        hello();
    };

    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        
        textIntoDb(mask(transcript))

        for (const word of agradecimentosComuns) {
            if (transcript.includes(mask(word))) {
                cortesia()
                break;
            }else{
                checkWakeWord(mask(transcript));
                break;
            }    
        }
    };



    recognition.onerror = (event) => {
        console.error('Erro de reconhecimento:', event.error);
    };

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => {
            recognition.start();
            isListening = true;
        })
        .catch((err) => {
            console.log(err);
        });
}
