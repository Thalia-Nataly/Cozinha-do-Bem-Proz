let btnMenuMob = document.querySelector('#btn-menu-mob');
let btnMenuMobLine1 = document.querySelector('.line-menumob-1');
let btnMenuMobLine2 = document.querySelector('.line-menumob-2');

btnMenuMob.addEventListener('click', () => {
    btnMenuMobLine1.style.width = '30px';
    btnMenuMobLine2.style.width = '20px';
    btnMenuMob.style.backgroundColor = 'white';
});