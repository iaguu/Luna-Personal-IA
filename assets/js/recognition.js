const synth = window.speechSynthesis;
let isListening = false;
let recognition = null;

function voiceListener() {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
        console.log('Seu navegador não suporta reconhecimento de voz.');
        return;
    }

    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR';
    recognition.continuous = true;

    recognition.onstart = () => {
        console.log('Reconhecimento de voz iniciado.');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        console.log('Texto reconhecido:', transcript);
        checkWakeWord(mask(transcript));
    };

    recognition.onerror = (event) => {
        console.error('Erro de reconhecimento:', event.error);
    };

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => {
            recognition.start();
            isListening = true;
            console.log('Ouvindo...');
        })
        .catch((err) => {
            console.error('O usuário negou o acesso ao microfone:', err);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const meuBotao = document.getElementById('startButton');

    meuBotao.addEventListener('click', function () {
        voiceListener();
    });
});
