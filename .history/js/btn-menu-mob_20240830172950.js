
// selecionando os elementos
let btnMenuMob = document.querySelector('#btn-menu-mob');
let Line1 = document.querySelector('.line-menumob-1');
let Line2 = document.querySelector('.line-menumob-2');
let menuMobile = document.querySelector('#menu-mobile');

// adicionando evento click na barra de menu mobile
btnMenuMob.addEventListener("click", () => {
    Line1.classList.toggle('ativo1')
    Line2.classList.toggle('ativo2')
    
})

