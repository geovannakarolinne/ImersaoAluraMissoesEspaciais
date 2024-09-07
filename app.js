// Função que realiza a pesquisa e exibe os resultados na página
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa || campoPesquisa == " ") {
        section.innerHTML = "<p class='missao-texto'> Não foi encontrado nenhuma missão. Digite novamente. </p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    let nome = "";
    let pais = "";
    let tags = "";
    let dataLancamento = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        pais = dado.pais.toLowerCase();
        tags = dado.tags.toLowerCase();
        dataLancamento = dado.dataLancamento.toLocaleLowerCase();

        //Se o nome que foi digitado tiver na base de dados
        if (nome.includes(campoPesquisa) || pais.includes(campoPesquisa) || tags.includes(campoPesquisa) || dataLancamento.includes(campoPesquisa)) {
            // Concatena o HTML de cada resultado à string 'resultados' - cria um novo elemento
            resultados += `
                <div class="item-resultado-2">
                    <div class="item-resultado">
                        <img src="${dado.imagem}" alt="Imagem do foguete ${dado.nome}" style="width:200px; height:auto;">
                    </div>
                    <div class="item-resultado">
                        <h2>
                           ${dado.nome}
                        </h2>
                        <p class="descricao-meta">País: ${dado.pais}</p>
                        <p class="descricao-meta">Data de lançamento: ${dado.dataLancamento}</p>
                        <p class="descricao-meta">Agência: ${dado.agencia}</p>
                        <p class="descricao-meta">Base de Lançamento: ${dado.baseLancamento}</p>
                        <p class="descricao-meta">Carga útil: ${dado.cargaUtil}</p>
                        <p class="descricao-meta">Status: ${dado.status}</p>
                        <a href=${dado.link} target="_blank">Mais informações.</a>
                    </div>
                </div>
            `;
        }  
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado. Digite novamente. </p>"
    }

    // Insere o HTML gerado na seção correspondente
    section.innerHTML = resultados;
}

function exibirTudo() {
    let resultados = "";
    let section = document.getElementById("resultados-pesquisa");
    
    for (let dado of dados) {
        //Se o nome que foi digitado tiver na base de dados
        resultados += `
            <div class="item-resultado-2">
                <div class="item-resultado">
                    <img src="${dado.imagem}" alt="Imagem do foguete ${dado.nome}" style="width:200px; height:auto;">
                </div>
                <div class="item-resultado">
                    <h2>
                        ${dado.nome}
                    </h2>
                    <p class="descricao-meta">País: ${dado.pais}</p>
                    <p class="descricao-meta">Data de lançamento: ${dado.dataLancamento}</p>
                    <p class="descricao-meta">Agência: ${dado.agencia}</p>
                    <p class="descricao-meta">Base de Lançamento: ${dado.baseLancamento}</p>
                    <p class="descricao-meta">Carga útil: ${dado.cargaUtil}</p>
                    <p class="descricao-meta">Status: ${dado.status}</p>
                    <a href=${dado.link} target="_blank">Mais informações.</a>
                    </div>
            </div>
        `;
    }
    section.innerHTML = resultados;  
}