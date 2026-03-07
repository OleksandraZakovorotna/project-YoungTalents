import { openOrderModal } from './order-modal.js';

const refs = {
  backdrop: document.querySelector('[data-pet-modal-backdrop]'),
  closeBtn: document.querySelector('[data-pet-modal-close]'),
  adoptBtn: document.querySelector('[data-pet-modal-adopt]'),

  img: document.querySelector('[data-pet-modal-img]'),
  type: document.querySelector('[data-pet-modal-type]'),
  name: document.querySelector('[data-pet-modal-name]'),
  meta: document.querySelector('[data-pet-modal-meta]'),
  desc: document.querySelector('[data-pet-modal-desc]'),
  health: document.querySelector('[data-pet-modal-health]'),
  behavior: document.querySelector('[data-pet-modal-behavior]'),
};

let currentPet = null;

// scroll lock
function lockScroll() {
  document.body.classList.add('modal-open');
}

function unlockScroll() {
  document.body.classList.remove('modal-open');
}

//  close handlers 
function onEsc(e) {
  if (e.key === 'Escape') closePetModal();
}

function onBackdropClick(e) {
  if (e.target === refs.backdrop) closePetModal();
}

function onCloseClick() {
  closePetModal();
}

function onAdoptClick() {
  closePetModal();

  if (typeof openOrderModal === 'function') {
    openOrderModal(currentPet);
  }
}

// fill content 
function fillModal(pet) {
const imgSrc = pet.image || pet.img || pet.photo || pet.avatar || '';
  refs.img.src = imgSrc;
  refs.img.alt = pet.name ? `Фото: ${pet.name}` : 'Фото тварини';

  refs.type.textContent = pet.type || pet.species || 'Тварина';
  refs.name.textContent = pet.name || 'Без клички';

  const age = pet.age ?? '—';
  const sex = pet.sex ?? pet.gender ?? '—';
  refs.meta.textContent = `${age} • ${sex}`;

  refs.desc.textContent = pet.description ?? pet.desc ?? 'Опис відсутній.';
  refs.health.textContent = pet.healthStatus ?? 'Інформація відсутня.';
  refs.behavior.textContent = pet.behavior ?? 'Інформація відсутня.';

  console.log(pet);
}

//  public API  
export function openPetModal(pet) {
  if (!refs.backdrop) return;

  currentPet = pet;
  fillModal(pet);

  refs.backdrop.classList.remove('is-hidden');
  lockScroll();

  window.addEventListener('keydown', onEsc);
  refs.backdrop.addEventListener('click', onBackdropClick);
  refs.closeBtn.addEventListener('click', onCloseClick);
  refs.adoptBtn.addEventListener('click', onAdoptClick);
}

export function closePetModal() {
  if (!refs.backdrop) return;

  refs.backdrop.classList.add('is-hidden');
  unlockScroll();

  window.removeEventListener('keydown', onEsc);
  refs.backdrop.removeEventListener('click', onBackdropClick);
  refs.closeBtn.removeEventListener('click', onCloseClick);
  refs.adoptBtn.removeEventListener('click', onAdoptClick);

  currentPet = null;
}