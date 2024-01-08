let textos = []; // Array para armazenar os textos

// Função para adicionar e exibir textos
function textIntoDb(texto) {
  textos.push(texto); // Adiciona o texto ao array
    console.log(textos);
  // Atualiza o armazenamento local (localStorage) com os textos
  localStorage.setItem('textosAPI', JSON.stringify(textos));
}


// Exportar textos para um arquivo .txt (evento de clique em um botão)

document.getElementById('exportButton').addEventListener('click', () => {
  const textosArmazenados = localStorage.getItem('textosAPI');

  // Verifica se existem textos armazenados
  if (textosArmazenados) {
    const blob = new Blob([textosArmazenados], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Cria um link de download para o arquivo .txt
    const link = document.createElement('a');
    link.href = url;
    link.download = 'textosAPI.txt';
    link.click();
  } else {
    console.log('Não há textos para exportar.');
  }
});
