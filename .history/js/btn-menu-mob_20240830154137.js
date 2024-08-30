let btnMenuMob = document.querySelector('#btn-menu-mob');
let line1 = document.querySelector('.line-menumob-1');
let line2 = document.querySelector('.line-menumob-2');

// Verifica se os elementos foram encontrados
if (btnMenuMob && line1 && line2) {
    // Adiciona o evento de clique
    btnMenuMob.addEventListener("click", () => {
        line1.classList.toggle('ativo1');
        line2.classList.toggle('ativo2');
    });
} else {
    console.error('Um ou mais elementos não foram encontrados no DOM.');
}