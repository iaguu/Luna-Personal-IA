const speakText = (text) => {
    var utter = new SpeechSynthesisUtterance(text);
    voices = synth.getVoices();
    utter.voice = voices[16];
    synth.speak(utter);
}