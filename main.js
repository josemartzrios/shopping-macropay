



const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navbar-left ul");

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    
})

