
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
function showLoader() {
  const loader = document.getElementById('loader');
  loader.classList.remove('is-hidden'); // показати спінер

} 

// Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('is-hidden'); // приховати спінер
}


// Показати кнопку Load more
function showLoadMoreButton() {
  const button = document.querySelector('.load-more');
  button.classList.remove('is-hidden');
}

// Приховати кнопку Load more
function hideLoadMoreButton() {
  const button = document.querySelector('.load-more');
  button.classList.add('is-hidden');
}

export { showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton };