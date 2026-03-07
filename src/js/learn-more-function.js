import { openPetModal } from './animal-details-modal.js';

export function initLearnMoreButtons() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.learn-more-btn');
    if (!btn) return;

    const pet = {
      name: btn.dataset.name,
      species: btn.dataset.species,
      image: btn.dataset.img,
      description: btn.dataset.desc,
      age: btn.dataset.age,
      gender: btn.dataset.sex
    };

    openPetModal(pet);
  });
}



