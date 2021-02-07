import './style.scss';
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header_toggle');
const overlay = document.querySelector('.overlay');
headerMenu.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    document.body.classList.remove('noscroll');
  } else {
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    document.body.classList.add('noscroll');
  }
  header.classList.toggle('open');
});
overlay.addEventListener('click', () => {
  header.classList.toggle('open');
  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');
  document.body.classList.remove('noscroll');
});
