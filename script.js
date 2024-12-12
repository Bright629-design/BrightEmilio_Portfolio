const hamburger =
document.getElementById('hamburger');
const navMenu =
document.getElementById ('nav-menu');

hamburger.addEventListener('click', ()=> {
    navMenu.style.display = navMenu.style.display == 'block' ? 'none' : 'block';
});