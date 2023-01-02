// Dados do Cardapio
fetch("./populateCardsData.json")
    .then((response) => response.json())
    .then((json) => console.log(json));

const populateCards = document.getElementById("populate");

for (const [categoria, listaValores] of Object.entries(menuItems)) {
    populateCards.innerHTML += `
    <h2 class="categoria-nome-cat">${categoria.toUpperCase()}</h2>
    <ul type="none" class="categoria-nome" id="${categoria}">
    `
    
    const categoriaUl = document.getElementById(`${categoria}`);
    for (let i = 0; i < listaValores.length; i++) {
        categoriaUl.innerHTML +=  `
        <li class="item">
            <div class="content-display">
                <div class="menu-item-card">
                    <div class="card-img">
                        <img class="card-img-itself" src="./potato.webp" alt="batata frita">
                    </div>
                    <div class="card-desc">
                        <h3>${listaValores[i]["nome"]}</h3>
                        <h4>R$ ${listaValores[i]["preco"]}</h4>
                        <p align="center">${listaValores[i]["descricao"]}</p>
                    </div>
                    <div class="card-btn">
                        <button class="button is-success">
                            ADICIONAR+
                        </button>
                </div>
            </div>
        </li>
        `
    }
} 


