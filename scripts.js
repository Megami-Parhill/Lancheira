document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    // Função para adicionar item ao carrinho
    document.querySelectorAll('.btn-pedido').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.parentElement.querySelector('h2').innerText;
            const itemPrice = parseFloat(button.getAttribute('data-preco'));

            // Adiciona o item ao carrinho
            cart.push({ name: itemName, price: itemPrice });

            // Exibe a mensagem no modal
            const modal = document.getElementById('modal');
            const modalMessage = document.getElementById('modal-message');
            modalMessage.textContent = `${itemName} foi adicionado ao carrinho!`;
            modal.style.display = 'block';

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
    const cartElement = document.getElementById('cart');

    cartIcon.addEventListener('click', () => {
        cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none'; // Alterna a exibição do carrinho
        updateCartDisplay(); // Atualiza a exibição do carrinho
    });

    // Fechar o carrinho
    document.getElementById('close-cart').addEventListener('click', () => {
        cartElement.style.display = 'none'; // Oculta o carrinho
    });
    // Fechar o modal
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });
});
