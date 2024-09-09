function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa, remove espaços em branco no início e no fim
  const campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

  // Verifica se o array de dados está vazio ou não definido
  if (!dados || dados.length === 0) {
    // Se não houver dados, exibe uma mensagem de erro na seção
    section.innerHTML = "<p>Nenhum dado encontrado.</p>";
    // Interrompe a função para evitar processamentos desnecessários
    return;
  }

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Se o campo estiver vazio, exibe uma mensagem solicitando um termo de pesquisa
    section.innerHTML = "<p>Digite um termo para pesquisar.</p>";
    // Interrompe a função
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada elemento do array de dados
  for (const dado of dados) {
    // Verifica se o título ou a descrição do dado contém o termo de pesquisa (ignorando maiúsculas e minúsculas)
    if (dado.Titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
        dado.Descricao.toLowerCase().includes(campoPesquisa.toLowerCase())) {
      // Se o termo for encontrado, cria um elemento HTML para exibir o resultado
      resultados += `
        <div class="item-resultado">
          <h2><a href="${dado.Instagram}" target="_blank">${dado.Titulo}</a></h2>
          <p class="descricao-meta">${dado.Descricao}</p>
          <a href="${dado.Link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

if (!resultados) {
     resultados = "<p>Nada foi encontrado</p>"
}

  // Atribui os resultados da pesquisa à seção HTML
  section.innerHTML = resultados;
}