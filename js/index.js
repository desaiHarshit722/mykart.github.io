console.log('Fired');

const hmbrg = document.getElementById('hmbrg');

const menu = document.getElementById('menu');
const close = document.getElementById('close');

hmbrg.addEventListener('click', ()=>{
    menu.classList.toggle('translate');
})

close.addEventListener('click', ()=>{
    menu.classList.toggle('translate');
})