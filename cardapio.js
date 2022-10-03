menuItems = {
    "comidas":[
        {
            // "id":101,
            "nome":"Pão com ovo",
            "preco":"4,00",
            "descricao":"1 ovo frito com manteiga e 1 pão careca esquentado na chapa."
        },
        {
            // "id":102,
            "nome":"Misto",
            "preco":"6,00",
            "descricao":"1 pão de forma acompanhado com uma fatia de queijo e uma fatia de presunto."
        },
        {
            // "id":103,
            "nome":"Coxinha de Frango",
            "preco":"6,00",
            "descricao":"1 coxinha de frango grande acompanhada de um pote de maionese caseira."
        },
        {
            // "id":104,
            "nome":"Pastel de Bacon",
            "preco":"12,00",
            "descricao":"1 pastel de Bacon grande acompanhada de um pote de maionese caseira."
        },
        {
            // "id":105,
            "nome":"Bolo de Macaxeira",
            "preco":"5,00",
            "descricao":"1 bolo de macaxeira acompanhada de um copo de café preto adoçado."
        }
    ],
    "bebidas":[
        {
            // "id":201,
            "nome":"Água",
            "preco":"2,00",
            "descricao":"1 copo de água mineral."
        },
        {
            // "id":201,
            "nome":"Água com gás",
            "preco":"5,00",
            "descricao":"1 copo de água mineral com gás."
        },
        {
            // "id":202,
            "nome":"Suco (300ml)",
            "preco":"4,00",
            "descricao":"1 copo de suco (verificar disponibilidade de sabores)."
        },
        {
            // "id":202,
            "nome":"Suco (500ml)",
            "preco":"6,00",
            "descricao":"1 copo de suco (verificar disponibilidade de sabores)."
        },
        {
            // "id":202,
            "nome":"Suco com Coxinha (700ml)",
            "preco":"10,00",
            "descricao":"1 copo de suco acompanhado de uma deliciosa coxinha de frango!"
        },
        {
            // "id":203,
            "nome":"Devassa Lata",
            "preco":"5,00",
            "descricao":"1 latinha de Devasssa."
        },
        {
            // "id":203,
            "nome":"Catuaba",
            "preco":"5,00",
            "descricao":"1 garrafa de catuaba original."
        },
        {
            // "id":203,
            "nome":"Sake",
            "preco":"14,00",
            "descricao":"1 dose de nihonshu."
        }
    ]
}


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
                    <h3 class="item-nome">${listaValores[i]["nome"]}</h3>
                    <H4 class="item-preco">R$ ${listaValores[i]["preco"]}</H4>
                </div>
                <div class="item-descricao">
                    <p>${listaValores[i]["descricao"]}</p>
                </div>
            </div>
        </li>
        `
    }
}