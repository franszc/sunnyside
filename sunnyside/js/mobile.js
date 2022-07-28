const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navBar = document.getElementById('nav-bar');
    navBar.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);