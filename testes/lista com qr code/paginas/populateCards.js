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
            <img src="./card.png" alt="" class="menu-item-card-img">
            <div class="card-img">
            <h3 class="card-img-titulo">${listaValores[i]["nome"]}</h3>
            </div>
            <div class="card-desc">
                <img class="card-img-itself" src="./burger.png" alt="batata frita">
                        
                        <h4 class="card-preco">R$ ${listaValores[i]["preco"]}</h4>
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
 

