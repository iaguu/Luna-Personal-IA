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

async function traduzir(texto, idiomaDestino) {
  
  
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

function calcular(frase, operator) {

    const numbers = frase.replace(/[^0-9\s]/g, '');
    const numer = numbers.split(' ').filter(Boolean);

    if (numer.length !== 2) {
      return "Formato da expressão incorreto";
    }

    const num1 = parseFloat(numer[0]);
    const num2 = parseFloat(numer[1]);

    let resultado;

    switch (operator) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      default:

        return "Operação inválida.";
    }

      resultado = "O resultado é: " + resultado

      return resultado;
  }