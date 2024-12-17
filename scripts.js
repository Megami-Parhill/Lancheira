// Seleciona todos os elementos do DOM que possuem a classe 'btn-pedido'.
// Isso cria uma lista de todos os botões que serão usados para fazer pedidos.
document.querySelectorAll('.btn-pedido').forEach(button => {

    // Para cada botão encontrado, adiciona um ouvinte de eventos.
    // O evento a ser observado é o 'click', ou seja, quando o botão for clicado.
    button.addEventListener('click', () => {

        // Obtém o valor do atributo 'data-preco' do botão clicado.
        // Este atributo armazena o preço do item. O `parseFloat` converte esse valor em um número decimal.
        const preco = parseFloat(button.getAttribute('data-preco'));

        // Busca o elemento `<h2>` que está dentro do mesmo elemento pai do botão.
        // O `parentElement` garante que estamos acessando o contêiner que envolve o botão e o título do item.
        // O `textContent` recupera o texto do elemento `<h2>`, que é o nome do lanche.
        const nomeLanche = button.parentElement.querySelector('h2').textContent;

        // Exibe uma mensagem de alerta com o nome do lanche e o preço formatado.
        // O `toFixed(2)` é usado para garantir que o preço seja exibido com 2 casas decimais.
        alert(`Você pediu: ${nomeLanche}\nPreço: R$${preco.toFixed(2)}`);
    });
});