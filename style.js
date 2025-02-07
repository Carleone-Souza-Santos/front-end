  
//vamos criar o banco de dados,,,simulação (Banco de Dados) 
    
let bancoDeDados = [
        { id: 1, nome: "Café Premium", descricao: "Café 100% Arábica", imagem: "./img/CaféArmarinho.png"}];



// Função para Renderizar os Produtos
const renderizarProdutos = ()=> {
        let container = document.getElementById("listaProdutos");
        container.innerHTML = ""; 

        bancoDeDados.forEach((produto) => {
            let card = `
                <div class="col s12 m3">
                    <div class="card">
                        <div class="card-image">
                            <img src="${produto.imagem}" alt="${produto.nome}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${produto.nome}</span>
                            <p>${produto.descricao}</p>
                        </div>
                        <div class="card-action">
                            <button class="btn red" onclick="removerProduto(${produto.id})">Remover</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }


    // Função para Adicionar Produto
    const adicionarProduto =()=> {
        let nome = document.getElementById("nomeProduto").value;
        let descricao = document.getElementById("descricaoProduto").value;
        let imagem = document.getElementById("imagemProduto").value || "./img/CaféArmarinho.png"; 

        if (nome.trim() === "" || descricao.trim() === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }
      

        let novoProduto = {
            id: Date.now(), 
            nome: nome,
            descricao: descricao,
            imagem: imagem
        };
          

        bancoDeDados.push(novoProduto);
        renderizarProdutos(); // Atualiza os cards
    }

    // Função para Remover Produto
    const removerProduto = (id)=> {
        bancoDeDados = bancoDeDados.filter(produto => produto.id !== id);
        renderizarProdutos();
    }

    // Inicializa com os produtos iniciais
    renderizarProdutos();



    
    