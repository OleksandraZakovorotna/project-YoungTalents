
document.addEventListener('click', e => {
  const btn = e.target.closest('.learn-more-btn');
  if (!btn) return;

  const petId = btn.dataset.id;
  console.log("Клік по Learn More! ID тварини:", petId);

  openLocalPetModal(petId); // ← твоя функція
});

function openLocalPetModal(petId) {
  const modal = document.querySelector('#modal-pet');
  if (!modal) return;

  modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');

  const closeBtn = document.querySelector('#modal-close');

  const closeModal = () => {
    modal.classList.add('is-hidden');
    document.body.classList.remove('modal-open');

    closeBtn?.removeEventListener('click', closeModal);
    modal.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keydown', escHandler);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const overlayClickHandler = e => {
    if (e.target === modal) closeModal();
  };
  modal.addEventListener('click', overlayClickHandler);

  const escHandler = e => {
    if (e.key === 'Escape') closeModal();
  };
  document.addEventListener('keydown', escHandler);
}

