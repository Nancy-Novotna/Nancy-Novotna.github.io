document.addEventListener('DOMContentLoaded', () => {
    const zmena_jazyku = document.querySelector('.jazyky');
    if (zmena_jazyku) {
        zmena_jazyku.querySelectorAll('[data-lang]').forEach(el => el.style.cursor = 'pointer');
    }
})

function jazyk_CZ() {

    if (document.querySelector('title').innerHTML === 'Raccoon website') {
        document.querySelector('title').innerHTML = 'Mývalí stránka'
        document.querySelector('h1').innerHTML = 'Mýval Severní'
    };
}

function jazyk_EN() {

    if (document.querySelector('title').innerHTML === 'Mývalí stránka') {
        document.querySelector('title').innerHTML = 'Raccoon website'
        document.querySelector('h1').innerHTML = 'Raccoon'
    };
}