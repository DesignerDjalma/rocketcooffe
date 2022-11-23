// Dados do Cardapio
fetch("./cardapioData.json")
    .then((response) => response.json())
    .then((json) => console.log(json));

const cardapio = document.getElementById("cardapio");

for (const [categoria, listaValores] of Object.entries(menuItems)) {
    cardapio.innerHTML += `<ul type="none" class="categoria-nome" id="${categoria}">
    <h2>${categoria.toUpperCase()}</h2>`
    
    const categoriaUl = document.getElementById(`${categoria}`);
    for (let i = 0; i < listaValores.length; i++) {
        categoriaUl.innerHTML +=  `
        <li class="item">
            <div class="item-box">
                <div class="item-rotulo">
                    <h3 class="item-nome">
                        ${listaValores[i]["nome"]}
                    </h3>
                    <H4 class="item-preco">
                        R$ ${listaValores[i]["preco"]}
                    </H4>
                </div>
                <div class="item-descricao">
                    <p>
                    ${listaValores[i]["descricao"]}
                    </p>
                </div>
            </div>
        </li>
        `
    }
} 