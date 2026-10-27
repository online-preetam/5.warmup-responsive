/*let menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');

    
  });*/
/*const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});*/

const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
  const isOpen = menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});