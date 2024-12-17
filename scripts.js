document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    // Função para adicionar item ao carrinho
    document.querySelectorAll('.btn-pedido').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.parentElement.querySelector('h2').innerText;
            const itemPrice = parseFloat(button.getAttribute('data-preco'));

            // Adiciona o item ao carrinho
            cart.push({ name: itemName, price: itemPrice });

            // Exibe uma mensagem de confirmação
            alert(`${itemName} foi adicionado ao carrinho!`);
            
            // Atualiza a exibição do carrinho
            updateCartDisplay();
        });
    });

    // Função para atualizar a exibição do carrinho
    function updateCartDisplay() {
        const cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = ''; // Limpa a lista atual

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(li);
        });

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('cart-total').textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    // Função para abrir/fechar o carrinho
    const cartIcon = document.getElementById('cart-icon');
    const cartElement = document.createElement('div');
    cartElement.id = 'cart';
    cartElement.innerHTML = `
        <h2>Carrinho</h2>
        <ul id="cart-items"></ul>
        <p id="cart-total">Total: R$ 0.00</p>
        <button id="close-cart">Fechar</button>
    `;
    document.body.appendChild(cartElement);

    cartIcon.addEventListener('click', () => {
        cartElement.classList.toggle('open');
        updateCartDisplay();
    });

    // Fechar o carrinho
    document.getElementById('close-cart').addEventListener('click', () => {
        cartElement.classList.remove('open');
    });
});
