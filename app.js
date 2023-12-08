// Função assíncrona que faz uma chamada à API de notícias e manipula o DOM para exibir os resultados.
async function getApi() {
    // URL da API de notícias com uma chave de API específica
    const apiURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5d732130678a4b3a96478262a95d6a2b`;
    
    // Faz a chamada à API usando fetch e aguarda a resposta
    let apiCall = await fetch(apiURL);
    
    // Converte a resposta da API para JSON
    let data = await apiCall.json();
  
    // Manipulação do DOM para exibir as notícias
    for (let i of data.articles) {
      // Seleciona a primeira instância de uma lista não ordenada no DOM
      const ul = document.querySelector("ul");
  
      // Cria um elemento de lista para cada notícia
      const li = document.createElement("li");
      li.classList.add("new");
  
      // Cria uma imagem e define seu atributo src como a URL da imagem da notícia
      const img = document.createElement("img");
      img.setAttribute("src", `${i.urlToImage}`)
  
      // Cria uma div para apresentação que conterá o título e a data
      const apresentationDiv = document.createElement("div");
      apresentationDiv.classList.add("apresentation");
  
      // Cria um título h2 para a notícia
      const title = document.createElement("h2");
      title.classList.add("title");
      title.innerHTML = i.title;
  
      // Cria um parágrafo para a data da notícia
      const date = document.createElement("p");
      date.classList.add("date");
      let dateFormat = new Date(i.publishedAt);
      date.innerHTML = dateFormat.toLocaleDateString();
  
      // Cria um parágrafo para o autor da notícia
      const font = document.createElement("p");
      font.classList.add("font");
      font.innerHTML = i.author
  
      // Cria uma div para a descrição da notícia
      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("descriptionDiv");
  
      // Cria um parágrafo para a descrição da notícia
      const description = document.createElement("p");
      description.classList.add("description");
      description.innerHTML = i.description;
  
      // Adiciona os elementos criados à hierarquia do DOM
      li.appendChild(img);
      apresentationDiv.appendChild(title);
      apresentationDiv.appendChild(date);
      li.appendChild(apresentationDiv);
      li.appendChild(font);
      descriptionDiv.appendChild(description);
      li.appendChild(descriptionDiv);
      ul.appendChild(li);
    }
  }
  
  // Chama a função para obter e exibir as notícias
  getApi();