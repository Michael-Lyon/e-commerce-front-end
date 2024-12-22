const bar = document.getElementById('bars');
bar.addEventListener('click', () => {
    const nav = document.getElementById('nav-bar');
    const cart = document.getElementById('cart');
    if (nav.style.right === '0px') {
        nav.style.right = '-300px';
        bar.classList.remove('fa-times');
        bar.classList.add('fa-bars');
        cart.style.display = 'block';
    } else {
        nav.style.right = '0px';
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-times');
        cart.style.display = 'none';
    }
});