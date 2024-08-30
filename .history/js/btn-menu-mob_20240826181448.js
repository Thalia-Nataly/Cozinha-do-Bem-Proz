let btnMenuMob = document.querySelector('#btn-menu-mob');
let Line1 = document.querySelector('.line-menumob-1');
let Line2 = document.querySelector('.line-menumob-2');

btnMenuMob.addEventListener('click', () => {
    Line1.style.width = '30px';
    btnMenuMobLine2.style.width = '20px';
    btnMenuMob.style.backgroundColor = 'white';
});