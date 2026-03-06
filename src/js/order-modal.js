// Відкриття та закриття модального вікна

// Переконатись у наявності класу "open-modal-btn" у кнопки, яка відкриває модалку
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.order-modal-close-btn');
const backdrop = document.querySelector('.backdrop');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onEscPress);

function openModal() {
  backdrop.classList.remove('is-hidden');
}

function closeModal() {
  backdrop.classList.add('is-hidden');
}

function onBackdropClick(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}

function onEscPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// Заборона скролу через body при відкритті модалки
function openModal() {
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}
// --------------
