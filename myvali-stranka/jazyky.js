
//INDEX
document.addEventListener('DOMContentLoaded', function jazyk_CZ() {
    localStorage.setItem('jazyk', 'CZ')
    if (document.querySelector('title').innerHTML === 'Raccoon website') {
        document.querySelector('title').innerHTML = 'Mývalí stránka'
    
// ZÁHLAVÍ
        document.querySelector('.zahlavi_domu').innerHTML = 'Domů'
        document.querySelector('.zahlavi_videa').innerHTML = 'Videa'
        document.querySelector('.zahlavi_fotky').innerHTML = 'Fotky'
        document.querySelector('.zahlavi_hudbicka').innerHTML = 'Hudbička'            
// INDEX
        document.querySelector('.nadpis_main').innerHTML = 'Mýval Severní'
        document.querySelector('.podnadpis_main').innerHTML = 'Náhodná stránka a mývalech,
        document.querySelector('.videolist_1').innerHTML = 'Mýval, co robí bordel'
        document.querySelector('.videolist_2').innerHTML = 'Útočný mýval'
        document.querySelector('.videolist_3').innerHTML = 'Mývalí okupace'
// VIDEA
        document.querySelector('.nadpis_videa').innerHTML = 'VIDEA'
// FOTKY
        document.querySelector('.nadpis_fotky').innerHTML = 'FOTKY'
    }
});
        

document.addEvenetListener('DOMContentLoaded', function jazyk_EN() {
    localStorage.setItem('jazyk', 'EN')
    if (document.querySelector('title').innerHTML === 'Mývalí stránka') {
        document.querySelector('title').innerHTML = 'Raccoon website'

    // ZÁHLAVÍ
        document.querySelector('.zahlavi_domu').innerHTML = 'Home'
        document.querySelector('.zahlavi_videa').innerHTML = 'Videos'
        document.querySelector('.zahlavi_fotky').innerHTML = 'Photos'
        document.querySelector('.zahlavi_hudbicka').innerHTML = 'Music'

    // INDEX
        document.querySelector('.nadpis_main').innerHTML = 'Raccoon'
        document.querySelector('.podnadpis_main').innerHTML = 'Random web about raccoons because why not.'
        document.querySelector('.videolist_1').innerHTML = 'Raccoon making a mess'
        document.querySelector('.videolist_2').innerHTML = 'Aggressive raccoon'
        document.querySelector('.videolist_3').innerHTML = 'Raccoon invasion'

    // VIDEA
        document.querySelector('.nadpis_videa').innerHTML = 'VIDEOS'

    // FOTKY
        document.querySelector('.nadpis_fotky').innerHTML = 'PHOTOS'
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const ulozeny_jazyk = localStorage.getItem('jazyk');

    if (ulozeny_jazyk === 'EN') {
        jazyk_EN();
    }
    else {
        jazyk_CZ();
    }
});
