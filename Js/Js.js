let icon = document.getElementById('icon');
let ul = document.getElementById('ul');
let body = document.querySelector('body')
let pep = document.getElementById('pep')
let peptow = document.getElementById('peptow')
let lastimg = document.getElementById('lastimg')
let peptowu = document.getElementById('peptowu')
let pepu = document.getElementById('pepu')
let loading = document.getElementById('loading')

icon.addEventListener('click', () => {
    ul.classList.toggle('active')
    body.classList.toggle('active')
});

pep.addEventListener('click', () => {
    body.classList.remove('colortow');
    body.classList.add('color');
    pepu.classList.add('show');
    peptowu.classList.remove('show');
});

peptow.addEventListener('click', () => {
    body.classList.remove('color');
    body.classList.add('colortow');
    peptowu.classList.add('show');
    pepu.classList.remove('show');


});

lastimg.addEventListener('click', () => {
    body.classList.remove('color')
    body.classList.remove('colortow')
    peptowu.classList.remove('show');
    pepu.classList.remove('show');

});

window.addEventListener('load', () => {
    loading.classList.add('hidden');
    body.classList.remove('over');

});