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
// Função para renderizar os circuitos
function renderCircuits() {
  const container = document.getElementById('circuits-container');

  for (let circuit of circuits) {
    const circuitDiv = document.createElement('div');
    circuitDiv.classList.add('circuit');

    circuitDiv.innerHTML = `
      <div class="img-title">
        <h2>${circuit.name.toUpperCase()}</h2>
        <img src="${circuit.img}" alt="${circuit.name}">
      </div>
      <div class="info">
        <div>
          <h3>First Grand Prix</h3>
          <p>${circuit.firstGrandPrix}</p>
        </div>
        <div>
          <h3>Number of Laps</h3>
          <p>${circuit.numberOfLaps}</p>
        </div>
        <div>
          <h3>Race distance</h3>
          <p>${circuit.raceDistance}</p>
        </div>
        <div>
          <h3>Circuit length</h3>
          <p>${circuit.circuitLength}</p>
        </div>
        <div class="lap-record">
          <h3>Lap record</h3>
          <p>${circuit.lapRecord.time}<span>${circuit.lapRecord.holder} (${circuit.lapRecord.year})</span></p>
        </div>
      </div>`;
    
    container.appendChild(circuitDiv);
  }
}

// Função para renderizar equipes
function renderTeams() {
  const container2 = document.getElementById('teams-container');

  for (let dado of equipe) {
    const teamDiv = document.createElement('div');
    teamDiv.classList.add('team');

    teamDiv.innerHTML = `
      <div class="teams">
        <div class="img-title">
          <img src="${dado.imagem}" alt="${dado.titulo}">
          <h2>${dado.titulo}</h2>
          </div>  
          <div class="item-texto">
          <p class="descricao-meta">${dado.descricao}</p>
          
          </div>
        
      </div>`;
    
    container2.appendChild(teamDiv);
  }
}

// Chama as funções de renderização após o carregamento da página
window.onload = function() {
  // Verifica se estamos na página de circuitos
  if (document.getElementById('circuits-container')) {
    renderCircuits();
  }

  // Verifica se estamos na página de equipes
  if (document.getElementById('teams-container')) {
    renderTeams();
  }
};