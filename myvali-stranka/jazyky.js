
function jazyk_CZ() {
    localStorage.setItem('jazyk', 'CZ')
//INDEX 
    if (document.querySelector('title').innerHTML === 'Raccoon website') {
        document.querySelector('title').innerHTML = 'Mývalí stránka'
    
// ZÁHLAVÍ
        document.querySelector('.zahlavi_domu').innerHTML = 'Domů'
        document.querySelector('.zahlavi_videa').innerHTML = 'Videa'
        document.querySelector('.zahlavi_fotky').innerHTML = 'Fotky'
        document.querySelector('.zahlavi_hudbicka').innerHTML = 'Hudbička'            
// INDEX
    if (document.querySelector('.nadpis_main')) {
        document.querySelector('.nadpis_main').innerHTML = 'Mýval Severní'
    }
    if (document.querySelector('.podnadpis_main')) {
        document.querySelector('.podnadpis_main').innerHTML = 'Náhodná stránka a mývalech, protože proč ne'
    }
    if (document.querySelector('.videolist_1')) {
        document.querySelector('.videolist_1').innerHTML = 'Mýval, co robí bordel'
    }
    if (document.querySelector('.videolist_2')) {
        document.querySelector('.videolist_2').innerHTML = 'Útočný mýval'
    }
    if (document.querySelector('.videolist_3')) {
        document.querySelector('.videolist_3').innerHTML = 'Mývalí okupace'
    }
    
// VIDEA
    if (document.querySelector('.nadpis_videa')) {
        document.querySelector('.nadpis_videa').innerHTML = 'VIDEA'
    }
// FOTKY
    if (document.querySelector('.nadpis_fotky')) {
        document.querySelector('.nadpis_fotky').innerHTML = 'FOTKY'
    }
};
        

function jazyk_EN() {
    localStorage.setItem('jazyk', 'EN')
    if (document.querySelector('title').innerHTML === 'Mývalí stránka') {
        document.querySelector('title').innerHTML = 'Raccoon website'

    // ZÁHLAVÍ
        document.querySelector('.zahlavi_domu').innerHTML = 'Home'
        document.querySelector('.zahlavi_videa').innerHTML = 'Videos'
        document.querySelector('.zahlavi_fotky').innerHTML = 'Photos'
        document.querySelector('.zahlavi_hudbicka').innerHTML = 'Music'

    // INDEX
    if (document.querySelector('.nadpis_main')) {
        document.querySelector('.nadpis_main').innerHTML = 'Raccoon'
    }
    if (document.querySelector('.podnadpis_main')) {
        document.querySelector('.podnadpis_main').innerHTML = 'Random web about raccoons because why not.'
    }
    if (document.querySelector('.videolist_1')) {
        document.querySelector('.videolist_1').innerHTML = 'Raccoon making a mess'
    }
    if (document.querySelector('.videolist_2')) {
        document.querySelector('.videolist_2').innerHTML = 'Aggressive raccoon'
    }
    if (document.querySelector('.videolist_3')) {
        document.querySelector('.videolist_3').innerHTML = 'Raccoon invasion'
    }
        
    // VIDEA
    if (document.querySelector('.nadpis_videa')) {
        document.querySelector('.nadpis_videa').innerHTML = 'VIDEOS'
    }

    // FOTKY
    if (document.querySelector('.nadpis_fotky')) {
        document.querySelector('.nadpis_fotky').innerHTML = 'PHOTOS'
    }
       

};

document.addEventListener('DOMContentLoaded', () => {
    const ulozeny_jazyk = localStorage.getItem('jazyk');

    if (ulozeny_jazyk === 'EN') {
        jazyk_EN();
    }
    else {
        jazyk_CZ();
    }
});
