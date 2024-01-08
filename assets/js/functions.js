function getHoraAtual() {
    const now = new Date();
    const hora = now.getHours();
    const minutos = now.getMinutes();

    return `${hora} horas e ${minutos} minutos.`;
}
function getDataFormatada() {
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const now = new Date();
    const dia = now.getDate();
    const mes = meses[now.getMonth()];
    const ano = now.getFullYear();

    return `${dia} de ${mes} de ${ano}`;
}

async function traduzirTexto(texto, idiomaDestino) {
    const apiKey = 'AIzaSyDknOL15hdGsG5ljoUcW7VSa83xF0oy8zo';
    const textoCodificado = encodeURIComponent(texto);
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${textoCodificado}&target=${idiomaDestino}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const traducao = data.data.translations[0].translatedText;
        return traducao;
    } catch (error) {
        console.error('Erro ao traduzir texto:', error);
        return 'Erro na tradução.';
    }
}

