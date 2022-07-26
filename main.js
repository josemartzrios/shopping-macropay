    
function menu(){
    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".navbar-left ul");

    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
        
    });
} 

function addToCart(){
    let count = 0;

    const boton1 = document.getElementById('btn1');
    const boton2 = document.getElementById('btn2');
    const boton3 = document.getElementById('btn3');
    const boton4 = document.getElementById('btn4');
    const boton5 = document.getElementById('btn5');

    const botones = [boton1, boton2, boton3, boton4, boton5];

    botones.forEach(boton => {


        const counter = document.getElementById('counter');
        boton.addEventListener('click', event => {
            count++;

            counter.innerText = count;
        });
        
    });

}

addToCart();
menu();
