  
//vamos criar o banco de dados,,,simulação (Banco de Dados) 
    
let bancoDeDados = [
        { id: 1, nome: "Café Premium", descricao: "Café 100% Arábica está cada vez mais caro!", imagem: "./img/CaféArmarinho.png"}];



// Função para Renderizar os Produtos
const renderizarNoticias = ()=> {
        let container = document.getElementById("listaNoticias");
        container.innerHTML = ""; 

        bancoDeDados.forEach((noticia) => {
            let card = `
                <div class="col s12 m3">
                    <div class="card">
                        <div class="card-image">
                            <img src="${noticia.imagem}" alt="${noticia.nome}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${noticia.nome}</span>
                            <p>${noticia.descricao}</p>
                        </div>
                        <div class="card-action">
                            <button class="btn red" onclick="removerNoticias(${noticia.id})">Remover</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }


    // Função para Adicionar noticia
    const adicionarNoticias =()=> {
        let nome = document.getElementById("nomeNoticia").value;
        let descricao = document.getElementById("descricaoNoticia").value;
        let imagem = document.getElementById("imagemNoticia").value || "./img/CaféArmarinho.png"; 

        if (nome.trim() === "" || descricao.trim() === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }
      

        let novaNoticia = {
            id: Date.now(), 
            nome: nome,
            descricao: descricao,
            imagem: imagem
        };
          

        bancoDeDados.push(novaNoticia);
        renderizarNoticias(); // Atualiza os cards
    }

    // Função para Remover Noticia
    const removerNoticias = (id)=> {
        bancoDeDados = bancoDeDados.filter(noticia => noticia.id !== id);
        renderizarNoticias();
    }

    // Inicializa com as Noticias iniciais
    renderizarNoticias();



    
    