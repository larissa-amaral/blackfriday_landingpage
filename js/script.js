const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let endereço = document.getElementById('endereço').value;
    let produtos = document.getElementById('produtos').value;
    let quantidade = document.getElementById('quantidade').value;
    let data = {
        nome,
        email,
        telefone,
        endereço,
        produtos,
        quantidade
    }
    let coverData = JSON.stringify(data)

    localStorage.setItem('lead', coverData)

    let content = document.getElementById('content')

    let carregando = '<p>carregando ...</p>'

    let pronto = '<p>Obrigado!</p>'


    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})