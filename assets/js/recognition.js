const synth = window.speechSynthesis;

let isActive = false;


function voiceListener() {


            navigator.mediaDevices.getUserMedia({ audio: true })
            .then(() => {

                recognition.start();
                isListening = true;
                console.log('Ouvindo...');

            })
            .catch((err) => {
                console.error('O usuário negou o acesso ao microfone:', err);
            });


            let recognition = null;

            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
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
        
    
            } else {
                console.log('Seu navegador não suporta reconhecimento de voz.');
            }

}


document.addEventListener('DOMContentLoaded', function() {
    const meuBotao = document.getElementById('startButton');

    meuBotao.addEventListener('click', function() {

        voiceListener();
    
    });
});