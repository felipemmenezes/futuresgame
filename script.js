const moods = ["Absurdo", "Alegre", "Tecnológico", "Assombrador", "Assustador", "Belo", "Bizarro", "Brilhante", "Calmo", "Chocante", "Confuso", "Confortante", "Criativo", "Curioso", "Depressivo", "Descolonizado", "Divertido", "Egoísta", "Empoderador", "Energizante", "Empolgante", "Encantador", "Engraçado", "Esperançoso", "Estranho", "Fascinante", "Feminista", "Frustrante", "Global", "Hilário", "Humilhante", "Inovador", "Inspirador", "Inteligente", "Justo", "Livre", "Misterioso", "Mundano", "Nojento", "Pacífico", "Perigoso", "Perturbador", "Popular", "Poderoso", "Queer", "Rápido", "Reacionário", "Regimentado", "Relaxante", "Resiliente", "Selvagem", "Sombrio", "Sábio", "Trágico", "Triste", "Verde"];

const objects = ["Animal", "Aparelho", "Aplicativo", "Arma", "Arte", "Bandeira", "Bebida", "Brinquedo", "Canção", "Comida", "Criatura", "Desastre", "Dispositivo", "Documento", "Droga", "Eletrodoméstico", "Esporte", "Estrutura", "Evento", "Experiência", "Ferramenta", "Festival", "Invenção", "Jogo", "Kit", "Livro", "Lei", "Máquina", "Mapa", "Marca", "Meio de Comunicação", "Monumento", "Mito", "Notícia", "Objeto", "Organização", "Política", "Pôster", "Produto", "Propaganda", "Remédio", "Ritual", "Roupa", "Serviço", "Sinal", "Software", "Tattoo", "Transporte", "Tradição", "Vídeo"];

const terrains = ["Agricultura", "Alimentos", "Animais", "Artes", "Arquitetura", "Cidades", "Clima", "Comunicação", "Crianças", "Crime", "Cultura", "Dados", "Dinheiro", "Educação", "Energia", "Entretenimento", "Espaço", "Família", "Fronteiras", "Gênero", "Genética", "Governança", "História", "Identidade", "Imaginação", "Infraestrutura", "Justiça", "Lei", "Lazer", "Memória", "Meio Ambiente", "Mídia", "Natureza", "Oceanos", "Política", "Poder", "Privacidade", "Recursos", "Religião", "Saúde", "Segurança", "Sociedade", "Espiritualidade", "Tecnologia", "Tempo", "Transporte", "Trabalho", "Vida", "Água", "Amor", "Economia", "Morte", "Ciência", "Mudança Climática", "Histórias", "Inteligência Artificial", "Guerra", "Vigilância"];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function drawCards() {
  const mood = getRandomItem(moods);
  const object = getRandomItem(objects);
  const terrain = getRandomItem(terrains);

  document.getElementById('moodValue').innerText = mood;
  document.getElementById('objectValue').innerText = object;
  document.getElementById('terrainValue').innerText = terrain;

  const resultText = `Em um futuro <strong>${mood}</strong>, existe um(a) <strong>${object}</strong> relacionado(a) à <strong>${terrain}</strong>, o que é?`;
  document.getElementById('result').innerHTML = resultText;
}
