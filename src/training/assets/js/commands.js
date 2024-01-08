const simpleCommands = { 
    'Qual é a hora atual': getHoraAtual(),
    'Que horas são': getHoraAtual(),
    'Me diga a hora, por favor.': getHoraAtual(),
    'Poderia me informar a hora agora': getHoraAtual(),
    'O que é a hora atual': getHoraAtual(),
    'Qual é a data de hoje': getDataFormatada(),
    'Poderia me dizer a data de hoje': getDataFormatada(),
    'Que dia é hoje': getDataFormatada(),
    'Qual é a data atual': getDataFormatada(),
};

const advancedCommands = { 
    mathOperations:{
        'Some' : '+',
        'Mais' : '+',
        '+' : '+',
        'Subtraia': '-',
        '-': '-',
        'Menos': '-',
        'Multiplique': '*',
        'x': '*',
        '*': '*',
        'Vezes': '*',
        '/': '/',
        'Divida': '/',
        'Dividido': '/'
    },
    languageTraduction:{
        'Traduza do': '',
        'Traduza para': '',
        'Traduza de': ''
    }
}