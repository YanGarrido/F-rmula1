function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (!campoPesquisa) {
    section.innerHTML = "Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte"
    return
  }
  campoPesquisa = campoPesquisa.toLowerCase()
  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let título = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <img src="${dado.foto}" alt="${dado.titulo}">
        <div class="item-texto">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Instagram</a>
        </div>
    </div>
`;
    }

  }
  if (!resultados) {
    resultados = "Nada foi encontrado!"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;


}

function equipes() {
  let section = document.getElementById("resultados-pesquisa");

  let resultados = "";

  for (let dado of equipe) {

    resultados += `
      <div class="teste2">
       <div class="item-resultado2">
        <img src="${dado.imagem}" alt="${dado.titulo}">
         <div class="item-texto2">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
          </div>
            
       </div> 
      </div>
    `;
  }

  section.innerHTML = resultados;

}