import { initLearnMoreButtons } from './learn-more-function.js';
const API_BASE = 'https://paw-hut.b.goit.study/api';
const petsList = document.getElementById('pets-list');
const filterList = document.getElementById('filter-list');
const loadMoreBtn = document.getElementById('load-more');
const loader = document.getElementById('loader');

let currentPage = 1;
let currentCategoryId = '';

const getLimit = () => (window.innerWidth >= 1440 ? 9 : 8);

const toggleLoader = show => {
  if (show) loader.classList.remove('is-hidden');
  else loader.classList.add('is-hidden');
};

// 1. Category

async function fetchCategories() {
  toggleLoader(true);

  try {
    const response = await fetch(`${API_BASE}/categories`);
    const categories = await response.json();

    let markup = `<li><button type="button" class="filter-btn active" data-id="">Всі</button></li>`;

    markup += categories
      .map(
        cat =>
          `<li><button type="button" class="filter-btn" data-id="${cat._id}">${cat.name}</button></li>`
      )
      .join('');

    filterList.innerHTML = markup;
  } catch (error) {
    console.error('Помилка завантаження категорій:', error);
  } finally {
    toggleLoader(false);
  }
}

// 2. Animals

async function fetchAnimals(page = 1, categoryId = '') {
  toggleLoader(true);

  const limit = getLimit();

  let url = `${API_BASE}/animals?page=${page}&limit=${limit}`;

  if (categoryId && categoryId !== '') {
    url += `&categoryId=${categoryId}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    const animals = data.animals || [];
    const totalItems = data.totalItems || 0;

    renderCards(animals, page === 1);

    const currentDisplayed = petsList.children.length;

    if (currentDisplayed >= totalItems || animals.length === 0) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    console.error('Помилка завантаження тварин:', error);
  } finally {
    toggleLoader(false);
  }
}

// 3. Pet card

function renderCards(animals, isNewSearch) {
  const markup = animals
    .map(
      pet => `
    <li class="pet-card">
      <picture class="pet-img-thumb">
        <source srcset="${pet.image}" media="(min-width: 320px)">
        <img src="${pet.image}" alt="${pet.name}" class="pet-img" loading="lazy">
      </picture>
      <div class="pet-content">
        <p class="pet-species">${pet.species}</p>
        <h3 class="pet-name">${pet.name}</h3>
        <ul class="pet-tags">
          ${pet.categories ? pet.categories.map(c => `<li>${c.name}</li>`).join('\n') : ''}
        </ul>

      <div class="pet-meta">
          <span>${pet.age}</span>  <span>${pet.gender}</span>
          </div>
        </div>
          <div class="pet-descr">
        <p class="pet-short-desc">${pet.shortDescription}</p>
        </div>
         <button
        type="button"
        class="learn-more-btn"
        data-name="${pet.name}"
        data-species="${pet.species}"
        data-img="${pet.image}"
        data-desc="${pet.shortDescription}"
        data-age="${pet.age}"
        data-sex="${pet.gender}"
        >Дізнатись більше
        </button>
    </li>
  `
    )
    .join('');

  if (isNewSearch) {
    petsList.innerHTML = markup;
  } else {
    petsList.insertAdjacentHTML('beforeend', markup);
  }
}

// 4. Event

filterList.addEventListener('click', async e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document
    .querySelectorAll('.filter-btn')
    .forEach(b => b.classList.remove('active'));

  btn.classList.add('active');

  currentCategoryId = btn.dataset.id;
  currentPage = 1;

  await fetchAnimals(currentPage, currentCategoryId);
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  await fetchAnimals(currentPage, currentCategoryId);
});

document.addEventListener('DOMContentLoaded', () => {
  fetchCategories(); // ← ЛОАДЕР СПРАЦЮЄ ВСЕРЕДИНІ fetchCategories
  fetchAnimals(1, ''); // ← ЛОАДЕР СПРАЦЮЄ ВСЕРЕДИНІ fetchAnimals
  initLearnMoreButtons();
});
