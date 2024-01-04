function insirirInfo() {
    // Recebendo valores do input
    const nome = document.getElementById('inputName').value;
    const numero = document.getElementById('inputNumberCard').value;
    const ano = document.getElementById('inputYear').value;
    const mes = document.getElementById('inputMonth').value;
    const codigo = document.getElementById('inputCodigo').value;

    // Insirindo os valores no cartão
    const numeroDoCartao = document.getElementById('numeroDoCartao');
    const numeroDeVencimento = document.getElementById('numeroDeVencimento');
    const codigoCvc = document.getElementById('codigoCvc');
    const nomeCartao = document.getElementById('nomeCartao');

    // Paragrafos para mostra a mensagem de erro
    const resNome = document.getElementById('resNome');
    const resNumero = document.getElementById('resNumero');
    const resMesAno = document.getElementById('resMesAno');
    const resCvc = document.getElementById('resCvc');


    if (nome === "") {
        // Mensagem de erro caso o campo esteje vazio
        resNome.innerText = "Por favor, insira seu nome no campo acima";
        resNome.style.color = 'red';
        
    } else {
        // Caso o campo receba algo digito imprima na tela
        nomeCartao.innerText = nome;
        // Caso o campo contenha algo limpeo
        resNome.innerText = '';
    }

    if (numero === "") {
        resNumero.innerText = "Por favor, insira o numero do cartão no campo acima";
        resNumero.style.color = 'red';
    } else {
        numeroDoCartao.innerText = numero
        resNumero.innerText = '';
    }

    // Pegando o valor de dois input
    if (ano === "" && mes === "") {
        resMesAno.innerText = "Preencha a data acima";
        resMesAno.style.color = 'red';
    } else {
        // Colocando o valor de dois input em uma unica variavel
        numeroDeVencimento.innerText = mes + '/' + ano;
        resMesAno.innerText = '';
    }

    if (codigo === '') {
        resCvc.innerText = 'Preencha o CVC acima';
        resCvc.style.color = 'red';
    } else {
        codigoCvc.innerText = codigo;
        resCvc.innerText = '';
    }

    // Verifica se todas as condições foram atendidas
    // Ou seja verifica se todas mensagens de erro estão vazias se estiverem ira oculta
    if (resNome.innerText === '' && resNumero.innerText === '' && resMesAno.innerText === '' && resCvc.innerText === '') {
        // Oculta o formulário principal
        document.getElementById('principal').style.display = 'none';
        // Exibe a mensagem de sucesso
        document.getElementById('mensagem-sucesso').style.display = 'block';
    }
}

// Função criada para retorna para janela principal
function btnFechaJanela() {
    let principal = document.getElementById('principal')
    let mensagemSucesso = document.getElementById('mensagem-sucesso')
    if (principal && mensagemSucesso) {
        principal.style.display = "block"
        mensagemSucesso.style.display = "none"
    }location.reload();
}

// Função criada para adicionar espaço a cada 4 caractere digitados pelo o usuario
document.getElementById('inputNumberCard').addEventListener('input', function () {
    const numeroInput = this.value.replace(/\s/g, ''); // Remove espaços existentes
    const formattedNumero = numeroInput.replace(/(\d{4})/g, '$1 ').trim();
    this.value = formattedNumero;
});