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



function openPopUp(){
    const btn1 = document.getElementById('open-btn1');
    const btn2 = document.getElementById('open-btn2');
    const btn3 = document.getElementById('open-btn3');
    const btn4 = document.getElementById('open-btn4');
    const btn5 = document.getElementById('open-btn5');


    const modalContainer = document.getElementById('modal_container');
    const botones = [btn1, btn2, btn3, btn4, btn5];
    
    botones.forEach(boton => {

        boton.addEventListener('click', () => {
            
            // boton.style.opacity = '0';
            modalContainer.classList.add('show');
        });

    });

}

    
function closePopUp(){

    const btn1 = document.getElementById('close-btn1');
    const btn2 = document.getElementById('close-btn2');
    const btn3 = document.getElementById('close-btn3');
    const btn4 = document.getElementById('close-btn4');
    const btn5 = document.getElementById('close-btn5');

    const modalContainer = document.getElementById('modal_container');
    const botones = [btn1, btn2, btn3, btn4, btn5];
   

    botones.forEach(boton => {

        boton.addEventListener('click', () => {
            
            // boton.style.opacity = '0';
            modalContainer.classList.remove('show');
        });

    });
};




addToCart();
menu();
openPopUp();
closePopUp();


