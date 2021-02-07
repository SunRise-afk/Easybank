import './style.scss';
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header_menu');
const overlay = document.querySelector('.overlay');
headerMenu.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else {
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }
  header.classList.toggle('open');
});
overlay.addEventListener('click', () => {
  header.classList.toggle('open');
  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');
});
