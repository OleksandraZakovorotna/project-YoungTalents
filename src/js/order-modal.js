import axios from 'axios';
import Swal from 'sweetalert2';

const backdrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.order-modal-close-btn');
const formEl = document.querySelector('.order-modal-form');

let currentAnimalId = null;

export function openOrderModal(animalId) {
  //TODO: прописати коректну змінну для id тварини замість animalId
  if (!backdrop || !animalId) return;
  currentAnimalId = animalId; //TODO: прописати коректну змінну для id тварини замість animalId

  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  window.addEventListener('keydown', onEscPress);
  backdrop.addEventListener('click', onBackdropClick);
  closeModalBtn.addEventListener('click', closeOrderModal);

  formEl.addEventListener('submit', handleFormSubmit);
}

export function closeOrderModal() {
  if (!backdrop) return;

  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');

  window.removeEventListener('keydown', onEscPress);
  backdrop.removeEventListener('click', onBackdropClick);
  closeModalBtn.removeEventListener('click', closeOrderModal);

  formEl.removeEventListener('submit', handleFormSubmit);
  formEl.reset();
}

function formatPhone(phone) {
  return phone.replace(/\D/g, ''); // removes everything except digits
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const { name, phone, comment } = e.target.elements;

  const formData = {
    name: name.value.trim(),
    phone: formatPhone(phone.value.trim()),
    comment: comment.value.trim(),
    animalId: currentAnimalId, //TODO: прописати коректну змінну для id тварини замість animalId
  };

  try {
    const response = await axios.post(
      'https://paw-hut.b.goit.study/api/orders',
      formData
    );

    Swal.fire({
      icon: 'success',
      title: 'Успіх!',
      text: 'Ваша заявка успішно відправлена.',
      confirmButtonColor: '#7bf556',
    });

    closeOrderModal();
  } catch (error) {
    console.log(error);
    const errorMessage =
      error.response?.data?.message || 'Щось пішло не так. Спробуйте пізніше.';

    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: errorMessage,
      confirmButtonColor: '#f55656',
    });
  }
}

function onEscPress(e) {
  if (e.key === 'Escape') closeOrderModal();
}

function onBackdropClick(e) {
  if (e.target === backdrop) closeOrderModal();
}
