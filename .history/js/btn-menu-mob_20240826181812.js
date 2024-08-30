let btnMenuMob = document.querySelector('#btn-menu-mob');
let Line1 = document.querySelector('.line-menumob-1');
let Line2 = document.querySelector('.line-menumob-2');

btnMenuMob.addEventListener('click', () => {
    Line1.classList.toggle('ativo1');
    Line1.classList.toggle('ativo1');
    Line2.classList.toggle('ativo2');
    Line2.classList.toggle('ativo2');
});